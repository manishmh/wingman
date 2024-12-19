import Glance from "@/components/home/summary-glance"
import SummaryInsights from "@/components/home/summary-insights"

const Summary = () => {
  return (
    <div className="mx-4 md:mx-10 my-6 border rounded-2xl p-4 md:p-6 space-y-16">
        <Glance />
        <SummaryInsights />
    </div>
  )
}

export default Summary