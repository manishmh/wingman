import Glance from "@/components/home/summary-glance"
import SummaryInsights from "@/components/home/summary-insights"
import Orders from "@/components/home/orders"

const Summary = () => {
  return (
    <div className="mx-4 md:mx-10 my-6 border rounded-2xl p-4 md:p-6 space-y-16">
        <Glance />
        <SummaryInsights />
        <Orders />
    </div>
  )
}

export default Summary