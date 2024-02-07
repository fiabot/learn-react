function Bio({name, imgSrc, profession, awards, discovered}){
  return(
  <section className="profile">
  <h2>{name}</h2>
  <img
    className="avatar"
    src={imgSrc}
    alt={name}
    width={70}
    height={70}
  />
  <ul>
    <li>
      <b>Profession: </b>
      {profession}
    </li>
    <li>
      <b>Awards: 4 </b>
      {awards}
    </li>
    <li>
      <b>Discovered: </b>
      {discovered}
    </li>
  </ul>
</section>);
}

export default function Gallery() {
  return (
    <div>
  
      <h1>Notable Scientists</h1>

      <Bio name ="Maria Skłodowska-Curie" 
          imgSrc='https://i.imgur.com/szV5sdGs.jpg'
          profession="physicist and chemist"
          awards=  "(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)" 
          discovered= "polonium (element)"
           />

      <Bio 
        name = "Katsuko Saruhashi"
            imgSrc='https://i.imgur.com/YfeOqp2s.jpg' 
            profession="geochemist" 
            awards="(Miyake Prize for geochemistry, Tanaka Prize)"
            discovered="a method for measuring carbon dioxide in seawater"/>

      
      
    </div>
  );
}
