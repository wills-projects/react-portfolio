import Header_Home from '../components/Header_Home'
import Footer from '../components/Footer'

function Home()
{
    return(
    <>
    <Header_Home/>
    <section class="main_section">
      <ul class="main_section_list">
        <li>
          <a href="./projects"
            ><img
              src="./src/assets/operating systems graphics library.png"
              alt="An image of a drawing I created using a system call graphics library."
            />
            <h2 id="projects">Projects</h2>
          </a>
        </li>
        <li>
          <a href="./experience"
            ><img
              src="./src/assets/tartanhacks.jpg"
              alt="A picture of my friend and I judging a TartanHacks facial recognition project."
            />
            <h2>Experience</h2>
          </a>
        </li>
        <li>
          <a href="./leadership"
            ><img
              src="./src/assets/jazz ensemble.jpg"
              alt="A picture of the Pitt Jazz Band ensemble rehearsing a song. I'm the vice president!"
            />
            <h2>Leadership</h2>
          </a>
        </li>
      </ul>
    </section>
    <Footer/>
    </> 
    );
}

export default Home;