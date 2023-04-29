
export const EachMovie = (data: any) => {
  return (
    <>
      <div className="box">
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
