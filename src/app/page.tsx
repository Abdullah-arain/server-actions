import { getData, getData1, getData2 } from "./actions"

export default async function Home() {

  const data = await getData2()
 
  console.log(data)
  return (
    <main className="flex min-h-screen flex-col  p-24">
     <div>
      {data.map((item: any) => {
        return (
          <div className='flex justify-between my-5'>
            <h1>{item.id}</h1>
            <h1>{item.task}</h1>
            {/* <h1>{item.email}</h1>
            <h1>{item.phone}</h1> */}
          </div>
        )
      })}
     </div>
    </main>
  )
}
