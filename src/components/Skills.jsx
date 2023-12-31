import React,{Component} from "react";
import axios from "axios"
export default class Skills extends Component {
  constructor(props){
    super(props)
    
  }
  state = {
    skills: []
  }
  
  componentDidMount() {

    axios.get(`https://script.google.com/macros/s/${import.meta.env.VITE_KEY}/exec?action=read&table=Skils`)
    .then(response => {
      const skil = response.data;
      this.setState ({skills:skil.data});
    })
  }
  render() {


  // const skills = [
  //   {
  //     logo: "logo-google-apps-script",
  //     skil_name: "HTML",
  //     count: 86,
  //   },
  //   {
  //     logo: "logo-css3",
  //     skil_name: "Expect",
  //     count: 90,
  //   },
  //   {
  //     logo: "logo-nodejs",
  //     skil_name: "Beginner",
  //     count: 40,
  //   },
  //   {
  //     logo: "logo-react",
  //     skil_name: "Intermediate",
  //     count: 80,
  //   },
  // ];
  return( 
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="flex items-center justify-center mt-12 gap-10 flex-wrap">
          {this.state.skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[10rem] max-w-[16rem] bg-gray-900 p-10 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  {skill.path ? 
                <svg xmlns="http://www.w3.org/2000/svg"
      viewBox={skill.viewport}
      fill="#000000" fill-rule="nonzero" 
      stroke="currentColor"
      strokeWidth="1"
      width="60" height="60" 
    >
    <path d={skill.path}/>
    </svg> : <ion-icon name={skill.logo}></ion-icon>
  }
                </div>
              </div>
              <p className="text-xl mt-3">{skill.skil_name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )

  }
}
