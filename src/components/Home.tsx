import React from 'react'
import { useCompanyQuery} from '../graphql/Queries'
//import cn from '../assets/companyName.png'

export default function Home() {
    const { data, error, loading } = useCompanyQuery();

    //console.log(data?.company.cto, error, loading, "boo")
  return (
    <main>
      <div className="flex items-center space-x-4 mb-8">
        <div className="border border-[#FCB6C0] rounded-full p-px">
          <h1 className="bg-[#FCB6C0] p-4 rounded-full m-px text-[#1CC578] font-medium text-2xl">
            CN
          </h1>
        </div>

        <p className="font-semibold text-2xl">{data?.company.name}</p>
      </div>
      <div className="mb-6">
        <h3 className="text-[#858585] text-sm">CEO</h3>
        <p>{data?.company.ceo}</p>
      </div>
      <div className="mb-6">
        <h3 className="text-[#858585] text-sm">CTO</h3>
        <p>{data?.company.cto}</p>
      </div>
    </main>
  );
}
