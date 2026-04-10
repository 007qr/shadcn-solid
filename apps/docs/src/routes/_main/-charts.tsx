import type { Accessor, JSX } from "solid-js"
import { lazy } from "solid-js"

type ChartComponent = Accessor<JSX.Element>

interface ChartItem {
  id: string
  component: ChartComponent
  fullWidth?: boolean
}

interface ChartGroups {
  area: ChartItem[]
  bar: ChartItem[]
  line: ChartItem[]
  donut: ChartItem[]
  tooltip: ChartItem[]
}

const AreaChart = lazy(() => import("@/registry/charts/area-chart"))
const AreaChartGradient = lazy(() => import("@/registry/charts/area-chart-gradient"))
const AreaChartInteractive = lazy(() => import("@/registry/charts/area-chart-interactive"))
const AreaChartLegend = lazy(() => import("@/registry/charts/area-chart-legend"))
const AreaChartLinear = lazy(() => import("@/registry/charts/area-chart-linear"))
const AreaChartStacked = lazy(() => import("@/registry/charts/area-chart-stacked"))
const AreaChartStep = lazy(() => import("@/registry/charts/area-chart-step"))
const BarChart = lazy(() => import("@/registry/charts/bar-chart"))
const BarChartActive = lazy(() => import("@/registry/charts/bar-chart-active"))
const BarChartHorizontal = lazy(() => import("@/registry/charts/bar-chart-horizontal"))
const BarChartInteractive = lazy(() => import("@/registry/charts/bar-chart-interactive"))
const BarChartMixed = lazy(() => import("@/registry/charts/bar-chart-mixed"))
const BarChartMultiple = lazy(() => import("@/registry/charts/bar-chart-multiple"))
const BarChartStacked = lazy(() => import("@/registry/charts/bar-chart-stacked"))
const ChartTooltipAdvanced = lazy(() => import("@/registry/charts/chart-tooltip-advanced"))
const ChartTooltipCustomLabel = lazy(() => import("@/registry/charts/chart-tooltip-custom-label"))
const ChartTooltipDefault = lazy(() => import("@/registry/charts/chart-tooltip-default"))
const ChartTooltipFormatter = lazy(() => import("@/registry/charts/chart-tooltip-formatter"))
const ChartTooltipIcon = lazy(() => import("@/registry/charts/chart-tooltip-icon"))
const ChartTooltipLabelFormatter = lazy(() => import("@/registry/charts/chart-tooltip-label-formatter"))
const ChartTooltipLine = lazy(() => import("@/registry/charts/chart-tooltip-line"))
const ChartTooltipNoIndicator = lazy(() => import("@/registry/charts/chart-tooltip-no-indicator"))
const ChartTooltipNoLabel = lazy(() => import("@/registry/charts/chart-tooltip-no-label"))
const DonutChart = lazy(() => import("@/registry/charts/donut-chart"))
const DonutChartLegend = lazy(() => import("@/registry/charts/donut-chart-legend"))
const DonutChartPie = lazy(() => import("@/registry/charts/donut-chart-pie"))
const LineChart = lazy(() => import("@/registry/charts/line-chart"))
const LineChartInteractive = lazy(() => import("@/registry/charts/line-chart-interactive"))
const LineChartLinear = lazy(() => import("@/registry/charts/line-chart-linear"))
const LineChartMultiple = lazy(() => import("@/registry/charts/line-chart-multiple"))

export const charts: ChartGroups = {
  area: [
    { id: "area-chart-interactive", component: () => <AreaChartInteractive />, fullWidth: true },
    { id: "area-chart-gradient", component: () => <AreaChartGradient /> },
    { id: "area-chart-legend", component: () => <AreaChartLegend /> },
    { id: "area-chart-linear", component: () => <AreaChartLinear /> },
    { id: "area-chart-stacked", component: () => <AreaChartStacked /> },
    { id: "area-chart-step", component: () => <AreaChartStep /> },
    { id: "area-chart", component: () => <AreaChart /> },
  ],
  bar: [
    { id: "bar-chart-interactive", component: () => <BarChartInteractive />, fullWidth: true },
    { id: "bar-chart-active", component: () => <BarChartActive /> },
    { id: "bar-chart-horizontal", component: () => <BarChartHorizontal /> },
    { id: "bar-chart-mixed", component: () => <BarChartMixed /> },
    { id: "bar-chart-multiple", component: () => <BarChartMultiple /> },
    { id: "bar-chart-stacked", component: () => <BarChartStacked /> },
    { id: "bar-chart", component: () => <BarChart /> },
  ],
  line: [
    { id: "line-chart-interactive", component: () => <LineChartInteractive />, fullWidth: true },
    { id: "line-chart-linear", component: () => <LineChartLinear /> },
    { id: "line-chart-multiple", component: () => <LineChartMultiple /> },
    { id: "line-chart", component: () => <LineChart /> },
  ],
  donut: [
    { id: "donut-chart", component: () => <DonutChart /> },
    { id: "donut-chart-legend", component: () => <DonutChartLegend /> },
    { id: "donut-chart-pie", component: () => <DonutChartPie /> },
  ],
  tooltip: [
    { id: "chart-tooltip-default", component: () => <ChartTooltipDefault /> },
    { id: "chart-tooltip-line", component: () => <ChartTooltipLine /> },
    { id: "chart-tooltip-no-indicator", component: () => <ChartTooltipNoIndicator /> },
    { id: "chart-tooltip-custom-label", component: () => <ChartTooltipCustomLabel /> },
    { id: "chart-tooltip-label-formatter", component: () => <ChartTooltipLabelFormatter /> },
    { id: "chart-tooltip-no-label", component: () => <ChartTooltipNoLabel /> },
    { id: "chart-tooltip-formatter", component: () => <ChartTooltipFormatter /> },
    { id: "chart-tooltip-icon", component: () => <ChartTooltipIcon /> },
    { id: "chart-tooltip-advanced", component: () => <ChartTooltipAdvanced /> },
  ],
}
