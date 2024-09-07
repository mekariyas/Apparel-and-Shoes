import React from 'react'

const Home = () => {
  return (
    <main className='w-full h-[80vh]'>
      <section className="w-full mt-20 h-[90%] flex flex-col justify-around items-center md:flex-row md:justify-between rounded-md shadow-md">
        <div className='w-4/5 h-2/5 flex flex-col justify-evenly items-center  md:w-[40%] md:h-5/6'>
          <h1 className='w-full text-2xl md:text-4xl font-bold mt-4 mb-4 text-center'>Apparel and Shoes Store Platform</h1>
          <p className='w-[80%] text-left'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Ea, consequatur cum! Tenetur amet alias, corporis autem praesentium 
            quo iure aspernatur non delectus minus voluptas iusto, 
            quaerat pariatur suscipit, temporibus ipsam!            
          </p>
        </div> 
        <div className="w-4/5 h-[60%] md:w-[40%] md:h-5/6 flex justify-center items-center">
          <img src="./Landing-Image.jpg" alt="Landing-image" loading="lazy" className="h-[60%] rounded-md object-fit-center w-[80%] md:h-[75%] md:w-[90%]" />
        </div>
      </section>
      <section className="w-full h-[90%] flex flex-col justify-around items-center md:flex-row md:justify-between rounded-md shadow-md">
        <div className='w-4/5 h-2/5 flex flex-col justify-evenly items-center  md:w-[40%] md:h-5/6'>
          <h2 className='w-full text-xl md:text-3xl font-bold mt-4 mb-4 text-center'>Trendy Shoes</h2>
          <p className='w-[80%] text-left'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Ea, consequatur cum! Tenetur amet alias, corporis autem praesentium 
            quo iure aspernatur non delectus minus voluptas iusto, 
            quaerat pariatur suscipit, temporibus ipsam!            
          </p>
        </div> 
        <div className="w-4/5 h-[60%] md:w-[40%] md:h-5/6 flex justify-center items-center">
          <img src="./shoes1.jpg" alt="Trendy-Shoes" loading="lazy" className="h-[60%] rounded-md object-fit-center w-[80%] md:h-[75%] md:w-[90%]" />
        </div>
      </section>
      <section className="w-full h-[90%] flex flex-col justify-around items-center md:flex-row md:justify-between rounded-md shadow-md">
        <div className='w-4/5 h-2/5 flex flex-col justify-evenly items-center  md:w-[40%] md:h-5/6'>
          <h2 className='w-full text-xl md:text-3xl font-bold mt-4 mb-4 text-center'>Cool Shirts</h2>
          <p className='w-[80%] text-left'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Ea, consequatur cum! Tenetur amet alias, corporis autem praesentium 
            quo iure aspernatur non delectus minus voluptas iusto, 
            quaerat pariatur suscipit, temporibus ipsam!            
          </p>
        </div> 
        <div className="w-4/5 h-[60%] md:w-[40%] md:h-5/6 flex justify-center items-center">
          <img src="./Tshirt1.jpg" alt="Cool-shirts" loading="lazy" className="h-[60%] rounded-md object-fit-center w-[80%] md:h-[75%] md:w-[90%]" />
        </div>
      </section>
      <section className="w-full h-[90%] flex flex-col justify-around items-center md:flex-row md:justify-between rounded-md shadow-md">
        <div className='w-4/5 h-2/5 flex flex-col justify-evenly items-center  md:w-[40%] md:h-5/6'>
          <h2 className='w-full text-xl md:text-3xl font-bold mt-4 mb-4 text-center'>Stylish Jeans</h2>
          <p className='w-[80%] text-left'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Ea, consequatur cum! Tenetur amet alias, corporis autem praesentium 
            quo iure aspernatur non delectus minus voluptas iusto, 
            quaerat pariatur suscipit, temporibus ipsam!            
          </p>
        </div> 
        <div className="w-4/5 h-[60%] md:w-[40%] md:h-5/6 flex justify-center items-center">
          <img src="./Jeans1.jpg" alt="Jeans" loading="lazy" className="h-[60%] rounded-md object-fit-center w-[80%] md:h-[75%] md:w-[90%]" />
        </div>
      </section>
    </main>
  )
}

export default Home
