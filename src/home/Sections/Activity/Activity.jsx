import { cloneElement, useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

const USERNAME = "sanjubhunia99";

const Activity = () => {
  const [refreshKey, setRefreshKey] = useState(0);
  const [weeklyContributions, setWeeklyContributions] = useState([]);
  const [graphError, setGraphError] = useState("");
  const [graphLoading, setGraphLoading] = useState(true);

  useEffect(() => {
    const interval = window.setInterval(
      () => {
        setRefreshKey((prev) => prev + 1);
      },
      30 * 60 * 1000,
    );

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    const loadContributions = async () => {
      setGraphLoading(true);
      setGraphError("");

      try {
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`,
          { signal: controller.signal },
        );
        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.error ?? "The GitHub contributions request failed.",
          );
        }
        if (
          !Array.isArray(data.contributions) ||
          !data.contributions.every(
            (activity) =>
              typeof activity.count === "number" &&
              Number.isFinite(activity.count) &&
              activity.count >= 0,
          )
        ) {
          throw new Error("The GitHub contributions response was invalid.");
        }

        const weeklyTotals = [];
        for (let index = 0; index < data.contributions.length; index += 7) {
          weeklyTotals.push(
            data.contributions
              .slice(index, index + 7)
              .reduce((total, activity) => total + activity.count, 0),
          );
        }
        setWeeklyContributions(weeklyTotals);
      } catch (error) {
        if (!(error instanceof Error && error.name === "AbortError")) {
          setGraphError(
            error instanceof Error
              ? error.message
              : "The GitHub activity graph could not be loaded.",
          );
        }
      } finally {
        if (!controller.signal.aborted) {
          setGraphLoading(false);
        }
      }
    };

    loadContributions();
    return () => controller.abort();
  }, [refreshKey]);

  const openGitHubDay = (date) => {
    if (!date) return;

    const githubDayUrl = `https://github.com/${USERNAME}?tab=overview&from=${date}&to=${date}`;
    window.open(githubDayUrl, "_blank", "noopener,noreferrer");
  };

  const maxWeeklyContributions = Math.max(...weeklyContributions, 1);
  const graphPoints = weeklyContributions
    .map((count, index) => {
      const x = 24 + (index / Math.max(weeklyContributions.length - 1, 1)) * 652;
      const y = 146 - (count / maxWeeklyContributions) * 120;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <section
      id="activity"
      className="mb-10 scroll-mt-20 px-3 pt-2 text-center text-white sm:px-6"
    >
      <div className="section-heading mb-6 text-xl font-semibold sm:text-2xl">
        🏃‍♂️ Activity
      </div>

      <div className="flex justify-center p-2">
        <div
          className="w-full max-w-full rounded-2xl border border-indigo-200/15 bg-gradient-to-br from-indigo-950/35 to-cyan-950/20 p-2 shadow-xl shadow-black/10 backdrop-blur sm:max-w-xl sm:p-3 md:max-w-2xl"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "28px 28px",
          }}
        >
          <div className="rounded-xl border border-white/5 bg-slate-950/40 p-3 sm:p-4">
            <div className="mb-2 flex items-center justify-between text-sm text-white/70">
              <span>Contributions per week</span>
              <a
                href={`https://github.com/${USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                GitHub profile
              </a>
            </div>
            {graphLoading ? (
              <p className="py-16 text-sm text-white/70" role="status">
                Loading GitHub activity…
              </p>
            ) : graphError ? (
              <p className="py-16 text-sm text-red-300" role="alert">
                Unable to load GitHub activity: {graphError}
              </p>
            ) : (
              <svg
                viewBox="0 0 700 170"
                role="img"
                aria-label="GitHub contributions per week over the last year"
                className="h-40 w-full"
                preserveAspectRatio="none"
              >
                {[26, 66, 106, 146].map((y) => (
                  <line
                    key={y}
                    x1="24"
                    x2="676"
                    y1={y}
                    y2={y}
                    stroke="rgba(255,255,255,0.12)"
                  />
                ))}
                <polyline
                  points={graphPoints}
                  fill="none"
                  stroke="#67e8f9"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 w-full overflow-x-auto">
        <div className="flex justify-start sm:justify-center">
          <div className="min-w-max rounded-xl px-4 py-4">
            <GitHubCalendar
              key={refreshKey}
              username={USERNAME}
              weekStart={0}
              showYearLabel={false}
              showWeekdayLabels={false}
              hideColorLegend={false}
              hideTotalCount={false}
              blockSize={15}
              blockMargin={3}
              fontSize={12}
              theme={{
                light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
                dark: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
              }}
              renderBlock={(block, activity) => {
                if (!block) return null;

                const count = Number(activity?.count) || 0;
                const date = activity?.date;
                const tooltipText =
                  count === 0
                    ? `${date} — No contributions`
                    : `${date} — ${count} contribution${count > 1 ? "s" : ""}`;

                return cloneElement(
                  block,
                  {
                    style: {
                      ...block.props.style,
                      cursor: "pointer",
                    },
                    onClick: () => openGitHubDay(date),
                    title: tooltipText,
                  },
                  <title>{tooltipText}</title>,
                );
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activity;
