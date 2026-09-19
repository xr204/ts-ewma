# Exponential moving average

When you are calculating error budgets or smoothing out noisy telemetry before it hits your dashboards, you usually end up evaluating the trade-offs between paying for a managed time-series aggregation service and building a lightweight exponential moving average in-house. This TypeScript implementation gives you the latter option without dragging in a massive dependency tree that you will eventually have to patch for CVEs. I would personally prefer to write this kind of low-level math in Go where the standard library handles the heavy lifting without the runtime overhead, but we are stuck with the Node ecosystem here. We rely strictly on the built-in TypeScript standard library. This keeps your CI pipeline fast and ensures your on-call engineers do not have to debug third-party memory leaks at three in the morning when a sudden traffic spike pushes your p99 latency past the SLO.

```
ewma.ts
```

If you need to verify the mathematical stability of the smoothing factor under extreme load, just execute the test suite located right next to the core implementation to see the concrete boundary conditions.