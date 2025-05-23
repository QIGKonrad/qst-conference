import { useState } from 'react';
import { Link } from 'react-scroll';
import { CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline';



import HeLogo from '/assets/HeraeusLogo.png';
import alcLogo from '/assets/alclogo.png';
import witsLogo from '/assets/wits-logo.png';
import tecAfrica from '/assets/CQCtecafrica.png';
import pdfFile from './static-assets/cqctech.pdf';


function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
// Confirmed speakers with parsed details
const confirmedSpeakers = [
  {
    name: "Prof. Abderrahim El Allati",
    institution: "Abdelmalek Essaadi University-Tetouan",
    title: "Setting up experimental quantum physics curricula in Africa",
    commitment: "Confirmed"
  },
  {
    name: "Prof. Andrew Forbes",
    institution: "University of Witwatersrand, Johannesburg, South Africa",
    title: "QST in South Africa",
    commitment: "Confirmed"
  },
  {
    name: "Prof. Ali Hassanali",
    institution: "ICTP, Trieste",
    title: "Sustainable science networking between continents",
    commitment: "Confirmed"
  },
  {
    name: "Prof. Ahmed Younes",
    institution: "Alexandria Quantum Computing Group, Alamein International University",
    title: "QST in Egypt",
    commitment: "Confirmed"
  },
  {
    name: "Dr. Henry Martin",
    institution: "KNUST, Kumasi, Ghana",
    title: "QST in Ghana",
    commitment: "Confirmed"
  },
  {
    name: "Prof. Roderich Moessner",
    institution: "MPI für Physik komplexer Systeme, Dresden",
    title: "The scientific publishing landscape and the essential ingredients for original science",
    commitment: "Confirmed"
  },
  {
    name: "Dr. Stefan Jorda",
    institution: "WEH, Hanau",
    title: "The Wilhelm and Else Heraeus Foundation’s perspective",
    commitment: "Confirmed"
  },
  {
    name: "Prof. Mourad Telmini",
    institution: "University of Tunis El Manar, Tunesia",
    title: "QST in Tunesia",
    commitment: "Confirmed"
  },
  {
    name: "Prof. Mahmoud Abdel-Aty",
    institution: "Ahlia University, Bahrain",
    title: "The Arabic perspective",
    commitment: "Confirmed"
  },
  {
    name: "Dr. Happy Sithole",
    institution: "Centre for High Performance Computing, Pretoria",
    title: "Forming an international Quantum Computing Network",
    commitment: "Confirmed"
  },
  {
    name: "Mr. Chinonso Onah",
    institution: "Department of Physics, RWTH Aachen University/Volkswagen AG, Germany",
    title: "Industrial Perspective (Germany)",
    commitment: "Confirmed"
  },

  {
    name: "Prof. Alain Dikande",
    institution: "DDepartment of Physics, University of Buea, Cameroon ",
    title: "QST in Cameroon",
    commitment: "Confirmed"
  },
  {
    name: "Dr. Prince Osei",
    institution: "African Institute for Mathematical Sciences, Ghana",
    title: "QST in Ghana",
    commitment: " "
  }, 
  {
    name: "Dr. Omololu Akin-Ojo",
    institution: "ICTP East African Institute for Fundamental Research, Rwanda ",
    title: "QST in Rwanda",
    commitment: " "
  },
  {
    name: "Prof. Robert Loew",
    institution: "Albert-Ludwigs-Universität Freiburg, Germany",
    title: "German Pespective",
    commitment: " "
  },
  {
    name: "Prof. Yassine Hassouni",
    institution: "University Mohammed V, Rabat, Morocco",
    title: "QST in Morocco ",
    commitment: " "
  }

];

  const sponsors = [
    {
      name: "cqcteclab",
      tier: "Platinum",
      logo: witsLogo
    },
    {
      name: "University of KwaZulu-Natal",
      tier: "Platinum",
      logo: alcLogo
    },
    {
      name: "Microsoft Quantum",
      tier: "Platinum",
      logo: HeLogo
    }
  ];


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-orange-600">Q<span className='text-black'>S</span>T <span className='text-black'>Africa</span> 2025</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link to="about" smooth={true} className="cursor-pointer text-orange-600 hover:text-slate-600">About</Link>
              <Link to="speakers" smooth={true} className="cursor-pointer text-orange-600 hover:text-slate-600">Speakers</Link>
              <Link to="schedule" smooth={true} className="cursor-pointer text-orange-600 hover:text-slate-600">Schedule</Link>
             </div>
             {/* <div className="hidden md:flex items-center h-4 w-4"> <Logo/></div> */}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-pattern pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Quantum Science and
          Technology across Africa<br/> 
          </h1>
          <p className="text-3xl  text-white mb-8 sm:text-xl font-semibold">
            Exploring the Future of QST in Africa
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-white mb-12">
            <div className="flex items-center">
              <CalendarIcon className="h-6 w-6 mr-2" />
              <span>June 23-27, 2025</span>
            </div>
            <div className="flex  items-center">
              <MapPinIcon className="h-6 w-6 mr-2" />
              <span>Premier Hotel Cutty Sark, Scottsburgh.</span>
            </div>
          </div>
          <button className="bg-orange-600 text-white px-8 py-3 rounded-md text-lg hover:bg-orange-700">
          <Link to="schedule" smooth={true} className="cursor-pointer text-white hover:text-slate-600">Conference Schedule</Link>
          </button>
        </div>
      </div>

      {/* About Section */}
<section id="about" className="bg-slate-200 py-20">
  <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl font-bold text-center text-orange-600 mb-12">Event Insight</h2>
    
    <div className="grid md:grid-cols-3 gap-8 items-start">
      
      {/* Why Attend - takes two-thirds on medium and up */}
      <div className="md:col-span-2">
        <h3 className="text-xl font-semibold mb-4">Why Attend?</h3>
        <p className="text-gray-600">
        Join us for four days as we host a small-scale, dedicated networking meeting aimed at bringing together scientists,
         representatives of learned societies, and funding bodies—all committed to fostering an autonomous African research strategy and agenda in
          quantum science and technology (QST). To maintain a focused strategy meeting, we plan to feature 22 speakers (including seven representatives from Germany)
          and will also admit approximately 30 junior participants. These participants will actively engage in roundtable / fishbowl discussions and poster sessions.
           Additionally, three junior participants will be selected to present their work as oral presentations.
        </p>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">What to Expect</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Keynote speeches from researchers,  leaders of research networks and funding bodies.</li>
            <li>• A public lecture, to showcase current QST research across the continent</li>
            <li>• Poster sessions</li>
            <li>• Networking sessions</li>
          </ul>
        </div>
        {/* Download Button */}
        <div className="mt-8">
          <a
            href={pdfFile} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-orange-600 text-white font-medium rounded-lg shadow-md hover:bg-orange-700 transition duration-300"
            >
            Download More Info (PDF)
          </a>
        </div>
      </div>

      {/* Image - goes up slightly and stays visible */}
      <div className="flex justify-center md:justify-end -mt-12">
        <img
          src={tecAfrica}
          alt="Tech Africa"
          className="w-full max-w-xs md:max-w-sm animate-[bounce_5s_ease-in-out_infinite]"
        />
      </div>

    </div>
  </div>
</section>



    <section id="speakers" className="bg-gray-100 py-8 px-3">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-orange-600 mb-6"> Speakers</h2>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          {confirmedSpeakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-3 border-l-4 border-orange-400 hover:shadow-md transition-shadow"
            >
              <h3 className="text-sm font-semibold text-gray-800">{speaker.name}</h3>
              {speaker.institution && (
                <p className="text-xs text-gray-600 italic mb-1">{speaker.institution}</p>
              )}
              <p className="text-sm text-gray-700 mb-2">🎯 <span className="font-medium">{speaker.title}</span></p>
              <span className="text-[10px] bg-emerald-100 text-grey-700 px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider">
                {speaker.commitment}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>



  <div id="schedule" className="pt-20 pb-0 md:mx-16 h-screen">
  <h2 className="text-2xl font-bold text-center text-orange-600 mb-6"> Conference Schedule</h2>
  <div className="overflow-x-auto rounded-lg shadow-md">
    <table className="w-full min-w-[1000px] text-sm text-left">
      <thead className="bg-gray-50 border-b-2 border-t-2 border-gray-200">
        <tr>
          <th className="p-3 font-semibold tracking-wide text-left"></th>
          <th className="p-3 font-semibold tracking-wide text-left">Monday</th>
          <th className="p-3 font-semibold tracking-wide text-left">Tuesday</th>
          <th className="p-3 font-semibold tracking-wide text-left">Wednesday</th>
          <th className="p-3 font-semibold tracking-wide text-left">Thursday</th>
          <th className="p-3 font-semibold tracking-wide text-left">Friday</th>
        </tr>
      </thead>
      <tbody>
        {/* ... your rows remain unchanged ... */}

        <tr className='border-b-2 border-gray-200  '>
                <td className='py-3'></td>
                <td className='bg-gradient-to-r from-emerald-300 to-emerald-500 py-3'> <span className='p-3 '> African perspectives</span></td>
                <td className='bg-gradient-to-r from-emerald-300 to-emerald-500 py-3'> <span className='p-3 '> African perspectives</span></td>
                <td className='bg-gradient-to-r from-cyan-300 to-cyan-500 py-3'> <span className=' px-6 py-3 '> Networks</span></td>
                <td className='bg-gradient-to-r from-orange-300 to-orange-500 py-3'> <span className=' p-3 '> German perspectives</span></td>
                <td className='bg-gradient-to-r from-violet-300 to-violet-500 py-3'> <span className=' p-3 '>African perspectives</span></td>
              </tr>

              <tr>
                <td> <span className='font-bold'>9:00</span></td>
                <td> Akin-Ojo (Rwanda) </td>
                <td> Abdel-Aty (Bahrain)</td>
                <td> Prince Osei (AIMS)</td>
                <td> N.N.</td>
                <td> role of academia</td>
              </tr>

              <tr>
              <td> <span className='font-bold'>9:30</span></td>
                <td> Hassouni (Morocco)</td>
                <td>Tabi (Botswana)</td>
                <td> Jorda (WEH)</td>
                <td> Moessner (Dresden)</td>
                <td> role of industry</td>
              </tr>


              <tr>
              <td> <span className='font-bold'>10:00</span></td>
                <td> Forbes (South Africa)</td>
                <td>Dikande (Cameroon)</td>
                <td> Sithole (CHPC)</td>
                <td> Loew (Stuttgart)</td>
                <td> role of networks</td>
              </tr>

              <tr className='border-b-2 border-gray-200'>
              <td> <span className='font-bold'>10:30</span></td>
              <td> <span className='text-1xl font-bold'>Coffee</span></td>
              <td> <span className='text-1xl font-bold'>Coffee</span></td>
              <td> <span className='text-1xl font-bold'>Coffee</span></td>
              <td> <span className='text-1xl font-bold'>Coffee</span></td>
              <td> <span className='text-1xl font-bold'>Coffee</span></td>
              </tr>


              <tr className='border-b-2 border-gray-200  '>
                <td className='py-3'></td>
                <td className='bg-gradient-to-r from-emerald-300 to-emerald-500 py-3'> <span className='p-3 '> African perspectives</span></td>
                <td className='bg-gradient-to-r from-emerald-300 to-emerald-500 py-3'> <span className='p-3 '> African perspectives</span></td>
                <td className='bg-gradient-to-r from-cyan-300 to-cyan-500 py-3'> <span className=' px-6 py-3 '> Networks</span></td>
                <td className='bg-gradient-to-r from-orange-300 to-orange-500 py-3'> <span className=' p-3 '> German perspectives</span></td>
                <td className='bg-gradient-to-r from-violet-300 to-violet-500 py-3'> <span className=' p-3 '>African perspectives</span></td>
              </tr>



              <tr>
              <td> <span className='font-bold'>11:00</span></td>
                <td>Onah (Cameroon)</td>
                <td> Younes (Egypt)</td>
                <td> UNESCO/SAPhyNet</td>
                <td> N.N.</td>
                <td> role of international partners</td>
              </tr>

              <tr>
              <td> <span className='font-bold'>11:30</span></td>
                <td> Telmini (Tunesia)</td>
                <td> El Allati (Morocco)</td>
                <td> Hassanali (ICTP)</td>
                <td> N.N.</td>
                <td> to do list 2025/2026</td>
              </tr>

              <tr>
              <td> <span className='font-bold'>12:00</span></td>
                <td> Martin (Ghana)</td>
                <td> N.N.</td>
                <td> N.N.</td>
                <td> N.N</td>
                <td> formation steering committee</td>
              </tr>

              <tr className='border-b-2 border-gray-200'>
                <td> <span className='font-bold'>12:30</span></td>
                <td> <span className='text-1xl font-bold'>Lunch</span></td>
                <td> <span className='text-1xl font-bold'>Lunch</span></td>
                <td> <span className='text-1xl font-bold'>Lunch</span></td>
                <td> <span className='text-1xl font-bold'>Lunch</span></td>
                <td> <span className='text-1xl font-bold'>Lunch</span></td>
              </tr>

              <tr className='border-b-2 border-gray-200'>
                <td> <span className='font-bold'>15:00</span></td>
                <td className='bg-gradient-to-r from-yellow-300 to-yellow-500 p-2'>round table: network <br/> quantum metrology/sensing</td>
                <td className='bg-gradient-to-r from-yellow-300 to-yellow-500 p-2'> round table: network <br/> quantum computing</td>
                <td className='bg-gradient-to-r from-teal-300 to-teal-500 p-2'> fishbowl: role of non-african partners <br/> I - efficient communication</td>
                <td className='bg-gradient-to-r from-teal-300 to-teal-500 p-2'>fishbowl: Conncect QST in Africa <br/> and Germany</td>
                <td className=' bg-gradient-to-r from-violet-300 to-violet-500 p-2'>  end of meeting</td>
              </tr>

              <tr className='border-b-2 border-gray-200'>
              <td> <span className='font-bold'>16:00</span></td>
              <td> <span className='text-1xl font-bold'>Coffee</span></td>
              <td> <span className='text-1xl font-bold'>Coffee</span></td>
              <td> <span className='text-1xl font-bold'>Coffee</span></td>
              <td> <span className='text-1xl font-bold'>Coffee</span></td>
              <td> <span className='text-1xl font-bold'>Coffee</span></td>
              </tr>

              <tr className='border-b-2 border-gray-200'>
                <td> <span className='font-bold'>16:30</span></td>
                <td className=' bg-gradient-to-r from-yellow-300 to-yellow-500 p-2'> round table: network <br/> quantum communication</td>
                <td className='bg-gradient-to-r from-teal-300 to-teal-500 p-2'> fishbowl: industrial <br/> environments</td>
                <td className='bg-gradient-to-r from-teal-300 to-teal-500 p-2 '> fishbowl: role of non-african partners <br/> II - Sustainable Implementation</td>
                <td className='bg-gradient-to-r from-yellow-300 to-yellow-500 p-2'> round table: QST education</td>
                <td>  </td>
              </tr>

              <tr className='border-b-2 border-gray-200'>
              <td> <span className='font-bold'>18:00</span></td>
              <td> <span className='text-1xl font-bold'>Dinner</span></td>
              <td> <span className='text-1xl font-bold'>Dinner</span></td>
              <td> <span className='text-1xl font-bold'>Dinner</span></td>
              <td> <span className='text-1xl font-bold'>Dinner</span></td>
              <td> <span className='text-1xl font-bold'>Dinner</span></td>
              </tr>


              <tr className='border-b-2 border-gray-200  '>
              <td> <span className='font-bold'>20:30</span></td>
                <td className='py-3'> </td>
                <td className='bg-gradient-to-r from-yellow-300 to-yellow-500 px-10'>  Poster session I</td>
                <td className='bg-gradient-to-r from-rose-300 to-rose-500 p-3'> Public Evening Lecture: <br/> Schuld (South Africa/Germany)</td>
                <td className='bg-gradient-to-r from-yellow-300 to-yellow-500 px-10'> Poster session II</td>
                <td className='py-3'> </td>
              </tr>
      </tbody>
    </table>
  </div>
</div>

<section id="sponsors" className="bg-gray-50">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
    {/* Sponsors */}
    <div  >
      <div className="mt-4">
        <h3 className="text-2xl font-semibold text-center mb-8 text-orange-600">Sponsors</h3>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {sponsors
            .filter(sponsor => sponsor.tier === "Platinum")
            .map((sponsor, index) => (
              <div
                key={index}
                className="flex justify-center items-center p-8 bg-white rounded-lg shadow-md"
              >
                <img src={sponsor.logo} alt={sponsor.name} className="h-24 object-contain" />
              </div>
            ))}
        </div>
      </div>

      {/* CTA Bar */}
      <div className="bg-orange-600 text-white font-bold px-4 py-4 mt-12">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-4 lg:gap-12 text-center">
          <p>CONNECT</p>
          <span className="hidden lg:inline">|</span>
          <p>CO-ORDINATE</p>
          <span className="hidden lg:inline">|</span>
          <p>CONTRIBUTE</p>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
              <p>Email: konradt@ukzn.ac.za</p>
              <p>Phone: +27 82 389 3981 </p>
              <p>Office: +27 65 942 8307 </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Location</h3>
              <p>Premier Hotel Cutty Sark</p>
              <p>Scottsburgh </p>
              <p>KwaZulu-Natal</p>
              <p>South Africa</p>
              <p>4180</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-orange-400">Twitter</a>
                <a href="#" className="hover:text-orange-400">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;