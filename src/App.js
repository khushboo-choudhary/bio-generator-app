import './App.css';
import { useState, useEffect, useRef } from "react";
import axios from "axios";

function App() {
  const inputRef = useRef();
  const [name, setName] = useState("Bravo");
  const [location, setLocation] = useState("Mylapur");
  const [school, setSchool] = useState("Meenakshi Medical college");
  const [major, setMajor] = useState("Heart Surgon");
  const [occupation, setOccupation] = useState("Doctor");
  const [religion, setReligion] = useState("Hindu");
  const [meeting, setMeeting] = useState("just conversation with members");
  const [image, setImage] = useState("https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png");
  const [videoSrc, setVideoSrc] = useState("");
  const [gender, setGender] = useState("male");
  const [isChecked, setIsChecked] = useState(true);
  const [isCheckedLocation, setIsCheckedLocation] = useState(true);
  const [isCheckedOccuption, setIsCheckedoccuption] = useState(true);
  const [isCheckedReligion, setIsCheckedReligion] = useState(true);
  const [isCheckedSchool, setIsCheckedSchool] = useState(true);
  // translation state variable
  const [options, setOptions] = useState([]);
  const [from, setFrom] = useState('auto');
  const [to, setTo] = useState('es');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  // checkbox condition
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  const handleOnChangeLocation = () => {
    setIsCheckedLocation(!isCheckedLocation);
  };
  const handleOnChangeSchool = () => {
    setIsCheckedSchool(!isCheckedSchool);
  };
  const handleOnChangeOccuption = () => {
    setIsCheckedoccuption(!isCheckedOccuption);
  };

  const handleOnChangeReligion = () => {
    setIsCheckedReligion(!isCheckedReligion);
  };

  // input value change
  const handleInputName = (e) => {
    setName(e.target.value);
  };

  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const handleInputLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleInputSchool = (e) => {
    setSchool(e.target.value);
  };

  const handleInputMajor = (e) => {
    setMajor(e.target.value);
  };

  const handleOccupation = (e) => {
    setOccupation(e.target.value);
  };

  const handleReligion = (e) => {
    setReligion(e.target.value);
  };

  const handleMeeting = (e) => {
    setMeeting(e.target.value);
  };

  const generateRandomPicture = () => {
    let pictureArray = ["https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80", "https://avatars.githubusercontent.com/u/1071625?v=4", "https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg", "https://xsgames.co/randomusers/assets/avatars/male/74.jpg", "https://blog.texasbar.com/files/2013/01/AmandaHouston_smaller1.jpg", "https://jv.ag/assets/images/bio-photo.jpg", "https://minimaltoolkit.com/images/randomdata/male/79.jpg", "https://xsgames.co/randomusers/assets/avatars/male/77.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQchKh0RM_hXmLJMZaQu8pU3_Ru6AqL8c3SlvrZsabfH2jydtI2coeV9r-lCFpwN6GDHRk&usqp=CAU", "https://images.unsplash.com/photo-1609132718484-cc90df3417f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFrZSUyMHdvbWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80"]
    setImage(pictureArray[Math.floor(Math.random() * pictureArray.length)]);
  }

  const generateRandomName = () => {
    let stack = [];
    let genderStack = [];
    let nameArray = [{ name: "Jacob", gender: "male" }, { name: "Oliver", gender: "male" }, { name: "Jack", gender: "neutral" }, { name: "Thomas", gender: "male" }, { name: "Eric", gender: "male" }, { name: "Oscar", gender: "neutral" }, { name: "Mandy Walters", gender: "female" }, { name: "Sunita Bora", gender: "female" }, { name: "Zoya Behl", gender: "female" }, { name: "Ishani Matthai", gender: "neutral" }, { name: "Janya Dalal", gender: "neutral" }, { name: "Kanti Chowdhury", gender: "female" }, { name: "Anaya Oak", gender: "female" }, { name: "Sushila Dutta", gender: "female" }, { name: "Rashmi Sharma", gender: "neutral" }];
    // eslint-disable-next-line array-callback-return
    nameArray.map((e) => {
      stack.push(e.name)
      genderStack.push(e.gender);
    })
    setName(stack[Math.floor(Math.random() * nameArray.length)]);
    setGender(genderStack[Math.floor(Math.random() * nameArray.length)])
  };

  const generateRandomLocation = () => {
    let locationArray = ["Haryana", "Mumbai", "Pune", "Dehli", "Nagpur", "Dubai", "Rajasthan", "Bangaluru", "Mangalore", "Chennai", "Coimbatore", "Faridabad", "Visakhapatnam", "Patna", "Ghaziabad"];
    setLocation(locationArray[Math.floor(Math.random() * locationArray.length)]);

  };

  const generateRandomSchool = () => {
    let schoolArray = ["the University of Utah", "Utah State", "Edgewood High", "Timber Creek Institute", "Westview School", "Tranquillity Middle School", "Sandalwood College", "Angelwood University", "Riverbank University", "Meadows School for Boys"];
    setSchool(schoolArray[Math.floor(Math.random() * schoolArray.length)]);
  };

  const generateRandomMajor = () => {
    let majorArray = ["Wildlife Conservation", "Information Systems", "Exercise Science", "Entrepreneurship", "Dietetics", "in the nursing program", "History", "Anthropology", "Computer Science", "Animation at BYU with hopes to become an animator at Pixar", "Animation", "Cybersecurity", "Ancient Near-Eastern Studies", "Psychology", "Elementary Education"];
    setMajor(majorArray[Math.floor(Math.random() * majorArray.length)]);
  };

  const generateRandomOccupation = () => {
    let OccuptionArray = ["journalist for a local newspaper", "manager at a local restaurant", "supervisor at Lowe's", "lab assistant", "electrician", "pastor for a local non-denominational Christian church", "musician", "regional manager of a paper company", "database administrator", "janitor at a local high school"];
    setOccupation(OccuptionArray[Math.floor(Math.random() * OccuptionArray.length)]);

  };
  const generateRandomReligion = () => {
    let religionArray = ["without any religion in the home. For most of [PossessivePronoun] life, [SubjectPronoun] has never had any interest in spiritual things", "in an atheist family, but due to some personal experiences, feels as if there might be some type of Divine Being", "in a Christian home with little activity within his religion", "Christian, but lost [PossessivePronoun] faith in God as a teenager", "Catholic", "without much religious experience, but has made a lot of friends who are members of the Church while attending school", "in a family that always encouraged a belief in God, but never attended one church consistently", "Lutheran, and has a strong belief in Christ and the Bible", "without religion in the home, but has always been curious about God", "Buddhist, and considers [ObjectPronoun]self very spiritual"];
    setReligion(religionArray[Math.floor(Math.random() * religionArray.length)]);

  };

  // const photoUpload = (e) => {
  //   const reader = new FileReader();
  //   const file = e.target.files[0];
  //   reader.onloadend = () => {
  //     setImage(reader.result);
  //     this.setState({
  //       file: file,
  //       imagePreviewUrl: reader.result,
  //     });
  //   };
  //   reader.readAsDataURL(file);
  // };

  // photo upload another method
  const photoUpload = (e) => {
    // console.log(e.target.files[0]);
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setImage(url);
  };

  // video uploaded

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setVideoSrc(url);
  };


  // Google translation
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  // custom transltion using libretranslate.com
  const translate = () => {

    // curl -X POST "https://libretranslate.de/translate" -H  "accept: application/json" -H  "Content-Type: application/x-www-form-urlencoded" -d "q=hello&source=en&target=es&api_key=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"

    const params = new URLSearchParams();
    params.append('q', input);
    params.append('source', from);
    params.append('target', to);
    params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');

    axios.post('https://libretranslate.de/translate', params, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(res => {
      setOutput(res.data.translatedText)
    })
  };

  useEffect(() => {
    axios
      .get('https://libretranslate.com/languages', {
        headers: { accept: 'application/json' },
      })
      .then((res) => {
        setOptions(res.data);
      });
  }, []);
  return (
    <div className="App">
      {/* NavBar */}
      <nav className='nav'>
        <h1>Bio Generator</h1>
      </nav>
      {/* Main Body */}
      <div className='main'>

        <section className='optionBox'>
          <h2 id='color'>Options</h2>
          <div id='color'>

            <label>Profile photo</label>&nbsp;&nbsp;
            <input type="file" id="input" accept='.jpg, .png, .jpeg'
              onChange={photoUpload}
            />

            <button id='white' className="btn"
              onClick={generateRandomPicture}
            >Random Picture</button>
          </div>
          <div className="VideoInput" id='color'>
            <label>Video File</label>&nbsp;&nbsp;
            <input
              ref={inputRef}
              id="input"
              type="file"
              onChange={handleFileChange}
              accept=".mov,.mp4"
            />
          </div>
          <div id='color'>
            <label>Name</label>&nbsp;&nbsp;
            <input
              type="text"
              id='white'
              value={name}
              placeholder="Enter name"
              onChange={handleInputName}
            />&nbsp;&nbsp;
            <label>Gender</label>&nbsp;&nbsp;
            <select
              value={gender}
              onChange={handleGender}

            >
              <option value="male" onChange={handleGender}>Male</option>
              <option value="female" onChange={handleGender}>Female</option>
              <option value="netural" onChange={handleGender}>Netural</option>
            </select>&nbsp;&nbsp;
            <button id='white' className="btn"
              onClick={generateRandomName}
            >Random name</button>
          </div>

          <div id='color'>
            <input
              type="checkbox"
              value="false"
              checked={isCheckedLocation}
              onChange={handleOnChangeLocation}
            ></input>&nbsp;&nbsp;
            <label>Location</label>&nbsp;&nbsp;
            <input
              type="text"
              id='white'
              value={location}
              onChange={handleInputLocation}
            ></input>&nbsp;&nbsp;
            <button id='white' className="btn" onClick={generateRandomLocation}>Random Location</button>
          </div>
          <div id='color'>
            <input
              type="checkbox"
              value="false"
              checked={isCheckedSchool}
              onChange={handleOnChangeSchool}
            ></input>&nbsp;&nbsp;
            <label>School</label>&nbsp;&nbsp;
            <input
              type="text"
              id='white'
              value={school}
              onChange={handleInputSchool}
            ></input>&nbsp;&nbsp;
            <button id='white' className="btn" onClick={generateRandomSchool}>Random School</button>
            <br /><br />
            <label>Major</label>&nbsp;&nbsp;
            <input
              type="text"
              id='white'
              value={major}
              onChange={handleInputMajor}
            ></input>&nbsp;&nbsp;
            <button id='white' className="btn" onClick={generateRandomMajor}>
              Random Major
            </button>
          </div>
          <div id='color'>
            <input
              type="checkbox"
              value="false"
              checked={isCheckedOccuption}
              onChange={handleOnChangeOccuption}
            ></input>&nbsp;&nbsp;
            <label>Occupation</label>&nbsp;&nbsp;
            <input
              type="text"
              id='white'
              value={occupation}
              onChange={handleOccupation}
            ></input>&nbsp;&nbsp;
            <button id='white' className="btn" onClick={generateRandomOccupation}>
              Random Occupation
            </button>
          </div>
          <div id='color'>
            <input
              type="checkbox"
              value="false"
              checked={isCheckedReligion}
              onChange={handleOnChangeReligion}
            ></input>&nbsp;&nbsp;
            <label>Religious background</label><br />
            <textarea
              id='white'
              rows="5"
              cols="70"
              value={religion}
              onChange={handleReligion}
            ></textarea><br />
            <button id='white' className="btn" onClick={generateRandomReligion}>Random religion</button>
          </div>
          <div id='color'>
            <input
              type="checkbox"
              value="false"
              checked={isChecked}
              onChange={handleOnChange}
            ></input>
            <label
              style={{
                verticalAlign: "middle",
                margin: "3px",
                marginBottom: "6px",
                padding: "0",
                color: "#222",
              }}
            >
              Reason for meeting with missionaries
            </label><br />
            <textarea
              // className="textarea"
              id='white'
              rows="6"
              cols="70"
              value={meeting}
              onChange={handleMeeting}
            ></textarea><br />
            <button
              className="selectbutton btn"
              id='sandal'
              onClick={() => setMeeting("was recently diagnosed with cancer. When [SubjectPronoun] find out about the cancer, [SubjectPronoun] went to [PossessivePronoun] for help. The pastor told [ObjectPronoun] that it was a result of God being displeased with [ObjectPronoun]. Fortunately, [Name] will likely recover from the cancer, but this experience caused [ObjectPronoun] to visit several other churches of different faiths, but none of them have felt right yet")}
            >
              Restoration
            </button>
            <button

              className="selectbutton btn"
              id='green'
              onClick={() => setMeeting("is looking to develop a more personal relationship with God")}
            >
              Plan of Salvation
            </button>
            <button
              className="selectbutton btn"
              id='blue'
              onClick={() => setMeeting("has hit a bit of a rough patch in life right now with all the crazy things happening in the world and is looking for some of that happiness. [SubjectPronoun] talked to [PossessivePronoun] friend about it and the friend suggested [Name] meet with the missionaries. [SubjectPronoun] is hoping to learn how to be a better Christian so that [SubjectPronoun] can get through hard times")}
            >
              Gospel of Christ
            </button>
            <button
              className="selectbutton btn"
              id='orange'
              onClick={() => setMeeting("met [PossessivePronoun] [Partner] the beginning of her sophomore year and they fell in love. They are happily living together until they finish college and then plan to move to California together. [Name] has been meeting with the missionaries for a few weeks because [SubjectPronoun] was doing research on religion in the area for a journalism class and came across the church website where [SubjectPronoun] requested a book of mormon. The missionaries brought it to [ObjectPronoun] door and invited [ObjectPronoun] to learn more. [SubjectPronoun] is really liking what [SubjectPronoun] is learning and has been to church once in the YSA ward. [SubjectPronoun] has also made some friends there. [PossessivePronoun] [Partner] is supportive but not interested. You have taught [ObjectPronoun] lessons 1-3 and [SubjectPronoun] liked them and wants to keep learning. [SubjectPronoun] also loves to read the book of mormon and tells you that [SubjectPronoun] feels that it's true")}
            >
              Law of Chastity
            </button>
            <button
              className="selectbutton btn"
              id='violet'
              onClick={() => setMeeting("has been taught the first 3 lessons so far and is excited about [PossessivePronoun] baptism coming up next month. [SubjectPronoun] does not drink or smoke, but drinks coffee every morning")}
            >
              Word of Wisdom
            </button>
            <button
              className="selectbutton btn"
              id='white'
              onClick={() => setMeeting("is wondering if there is a higher power and if it can benefit [ObjectPronoun] ")}
            >
              Any Lesson
            </button>
          </div>
        </section>

        <section className='resultBox'>
          <h2 className='box'>Result</h2>

          <div className="imagediv">
            {image ? <img src={image} alt="profile_photo" /> : null}
          </div>

          <div className="box" >
            {name} {isCheckedLocation ? `is from the ${location}` : null}{" "}
            {isCheckedSchool
              ? `${gender === "male" ? "He" : "She"
              } is studying ${major} at ${school}`
              : null}
            .
            {isCheckedOccuption
              ? `${gender === "male" ? " His" : " Her"
              } occupation is ${occupation}`
              : null}
            {isCheckedReligion
              ? `${gender === "male" ? " His" : " Her"} religion is ${religion}`
              : null}{" "}
            {gender === "male" ? "He" : "She"}{" "}
            {isChecked ? `meet you for ${meeting}` : null}

          </div>

          {/* video uploaded */}
          {videoSrc && (
            <video
              className="VideoInput_video"
              width="80%"
              height="13%"
              controls
              src={videoSrc}
            />
          )}

          {/* translator */}

          <h1 id='color'>Translator</h1>
          <div className='start' >
            &nbsp; &nbsp; From ({from}) : &nbsp;
            <select onChange={(e) => setFrom(e.target.value)}>
              {options.map((e) => (
                <option key={e.code} value={e.code}>
                  {e.name}
                </option>
              ))}
            </select>
            <div>
              <div className="resultBox">
                <textarea className="textarea" cols="55" rows="6" onInput={(e) => setInput(e.target.value)}></textarea>
              </div>

            </div>
          </div>


          <div className='start'>
            &nbsp;&nbsp; To ({to}) : &nbsp;
            <select onChange={(e) => setTo(e.target.value)}>
              {options.map((e) => (
                <option key={e.code} value={e.code}>
                  {e.name}
                </option>
              ))}
            </select>
            <div className="resultBox">
              <textarea className="textarea" cols="55" rows="6" value={output}></textarea>
            </div>
          </div>
          <div>
            <button onClick={() => translate()}>Translate</button>

          </div><br />
          <button id="google_translate_element"></button>
        </section>

      </div>

    </div>

  );
}

export default App;
