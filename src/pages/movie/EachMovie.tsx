
export const EachMovie = (data: any) => {
  return (
    <>
      <div className="box">
        <button className="book">დაჯავშნა</button>
        <div className="image-cover"
          style={{ "backgroundImage": `url('${data.data.img}')` }}
        >
        </div>
        <h2 className='box-title'>
          {data.data.name}
        </h2>
      </div>
    </>
  )
}
