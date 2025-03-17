import Image from "next/image"
export default function venueDetailPage({params}:{params:{vid:string}}){ 
        // Mock Data for Demonstration Only
        
        const mockVenue = new Map()
       
        mockVenue.set("001",{name:"The Bloom Pavilion",image:"/img/bloom.jpg"})
        mockVenue.set("002",{name:"Spark Space",image:"/img/sparkspace.jpg"})
        mockVenue.set("003",{name:"The Grand Table",image:"/img/grandtable.jpg"})
       
        
        return(
            <main className="text-center p-5">
                
                <div className=" flex flex-row my-5">
                    <Image src={(mockVenue.get(params.vid)).image} 
                        alt ='Product Picture'
                        width={0} height={0} sizes="100vw"
                        className="rounded-lg w-[30%] bg-black"
                    />
                <div  className="text-md mx-5">{(mockVenue.get(params.vid)).name}</div>
                </div>
               
            </main>
    
        )
    }
    
    
