import logo from "./assets/logo.png";
import modalImg from "./assets/Modal.jpg";
import imageMeet from "./assets/img-meeting.png";
import BCPImage from "./assets/Group 23.png";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import $ from "jquery";
window.jQuery = $;
window.$ = $;
import { motion } from "framer-motion";
import {
  Alert,
  Button,
  FooterCopyright,
  FooterDivider,
  Modal,
  ModalBody,
  ModalFooter,
  Spinner,
  Textarea,
} from "flowbite-react";
import "./App.css";
import { useState } from "react";
import { FloatingLabel } from "flowbite-react";
import CarouselCompo from "./components/CarouselCompo";
import { FaXmark } from "react-icons/fa6";

export default function App() {
  const [showModal, setShowModal] = useState(true);
  const [rotate, setRotate] = useState(false);
  const Address = [
    {
      headOffice:
        "G-101,police station,C-461, road, near Airport,Block C, Siddharth Nagar,Malviya Nagar,Jaipur, Rajasthan 302017",
      branchOffice:
        " G-101,police station,C-461, road, near Airport,Block C, Siddharth Nagar,Malviya Nagar,Jaipur, Rajasthan 302017",
    },
  ];
  const Products = [
    {
      id: 1,
      name: "Basic Website Package",
      subHeading: "Suitable for personal websites/new entrepreneurs",
      price: "$ 144",
      priceOff: "$ 480",
      listItems: ["item1", "item2", "item3", "item4", "item5", "item6"],
    },
    {
      id: 2,
      name: "Basic Website Package",
      subHeading: "Suitable for personal websites/new entrepreneurs",
      price: "$ 144",
      priceOff: "$ 480",
      listItems: ["item1", "item2", "item3", "item4", "item5", "item6"],
    },
    {
      id: 3,
      name: "Basic Website Package",
      subHeading: "Suitable for personal websites/new entrepreneurs",
      price: "$ 144",
      priceOff: "$ 480",
      listItems: ["item1", "item2", "item3", "item4", "item5", "item6"],
    },
    {
      id: 4,
      name: "Basic Website Package",
      subHeading: "Suitable for personal websites/new entrepreneurs",
      price: "$ 144",
      priceOff: "$ 480",
      listItems: ["item1", "item2", "item3", "item4", "item5", "item6"],
    },
    {
      id: 5,
      name: "Basic Website Package",
      subHeading: "Suitable for personal websites/new entrepreneurs",
      price: "$ 144",
      priceOff: "$ 480",
      listItems: ["item1", "item2", "item3", "item4", "item5", "item6"],
    },
    {
      id: 6,
      name: "Basic Website Package",
      subHeading: "Suitable for personal websites/new entrepreneurs",
      price: "$ 144",
      priceOff: "$ 480",
      listItems: ["item1", "item2", "item3", "item4", "item5", "item6"],
    },
  ];

  const People = [
    {
      id: 1,
      users: "42",
      percentage: "56",
      increasedTraffic: "06",
    },
  ];
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.username ||
      !formData.usermail ||
      !formData.phone ||
      !formData.message
    ) {
      return setErrorMessage("Please fill out all fields.");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      if (res.ok) {
        // console.log("SignUp Successful...");
        setShowModal(false);
        Alert('Registered Successfully');
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };
  return (
    <div className="">
      <Modal className="pt-8 md:pt-10 h-full scrollbar-none" show={showModal}>
        <ModalBody className="m-0 p-0 scrollbar-none">
          <div className="space-y-6 md:flex ">
            <div className="hidden md:block">
              <img
                className="md:w-64 md:h-full w-full h-80 pt-0"
                src={modalImg}
                alt=""
              />
            </div>
            <div className=" text-start md:ps-5 ps-10">
              <FaXmark
                onClick={() => {
                  setShowModal(false);
                }}
                className="flex float-end pe-1 md:pe-0 w-10"
              />
              <div className="ps-5">
                <p className="text-3xl text-purple-900">Amazing Discount</p>
                <p className="text-teal-400">Activate Your 70% Coupon Now</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="w-80 p-3 space-y-6">
                  <FloatingLabel
                    variant="standard"
                    label="Username"
                    required
                    id="username"
                    onChange={handleChange}
                  />
                  <FloatingLabel
                    type="mail"
                    variant="standard"
                    id="usermail"
                    label="Username@mail.com"
                    required
                    onChange={handleChange}
                  />
                  <FloatingLabel
                    type="tel"
                    variant="standard"
                    label="Phone Number"
                    id="phone"
                    required
                    onChange={handleChange}
                  />
                  <FloatingLabel
                    type="message"
                    variant="standard"
                    label="Your Message"
                    id="message"
                    onChange={handleChange}
                  />
                  <br />
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500"
                    outline
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Spinner size="sm" />
                        <span className="pl-3">Loading...</span>
                      </>
                    ) : (
                      "Submit"
                    )}
                  </Button>
                </div>
              </form>
              {errorMessage && (
                <Alert className="mt-5 mb-5 me-5" color="failure">
                  {errorMessage}
                </Alert>
              )}
              <div className="block md:hidden p-0 -ms-10">
                <img className="w-full" src={modalImg} alt="" />
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter className="h-1 flex justify-end">
          <Button
            color="failure"
            onClick={() => {
              setShowModal(false);
            }}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
      <div className="bg-gradient-to-tr from-purple-200 via-white to-blue-200">
        <div className="flex justify-between pt-1 text-xs mx-5">
          <p className="md:hidden">pi3tech.it@gmail.com</p>
          <p className="md:hidden">+91 92169 58469</p>
        </div>
        <div className="justify-between  md:flex px-5">
          <div className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white md:mx-20">
            <img className="md:w-32 md:h-16 w-auto h-32 md:mt-0 mt-10 md:ms-0 ms-10" src={logo} alt="" />
          </div>
          <div className="md:bg-white md:my-7 md:h-10 rounded-3xl  gap-2 p-3 mx-20 drop-shadow-lg hidden md:inline-flex">
            <FaEnvelope className="my-1" />
            <div className="flex self-center sm:text-sm gap-5 ">
              <p>pi3tech.it@gmail.com</p>
              <FaPhoneAlt className="mt-1"/>
              <p>+91 92169 58469</p>
            </div>
          </div>
        </div>
        <div className="flex p-3 max-w-6xl mx-auto flex-col md:flex-row items-center gap-12 md:mt-10 mt-20 ">
          <div className="w-full md:w-fit">
            <h1 className="text-4xl text-center font-serif  text-purple-800 mb-5">
              " Your Website Is the Heart of Your Online Presence "
            </h1>
            <p className="font-semibold  text-center">
              62% Customers will ignore a business without a web presence. So,
              interested getting a fresh website designed for your business that
              boosts your bottom line?
            </p>
          </div>
          <motion.div
            animate={{ scale: 1 }}
            initial={{ scale: 0 }}
            className="drop-shadow-lg p-2 flex"
          >
            <div className="drop-shadow-2xl md:w-16 h-32 bg-gradient-to-tl from-purple-800 to-blue-600 rounded-s-full my-auto"></div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 md:w-96 bg-white rounded-3xl drop-shadow-lg justify-center">
              <div>
                <h1 className="text-center font-serif  text-2xl text-teal-500">
                  Contact Us
                </h1>
                <h1 className="text-center   text-xl">
                  Get 30X more Sales With US!
                </h1>
                <div className="mb-2 space-y-3 mt-2 block">
                  <FloatingLabel onChange={handleChange} variant="outlined" id="username" label="Username" />
                  <FloatingLabel onChange={handleChange} variant="outlined" id="usermail" label="Username@mail.com" />
                  <FloatingLabel onChange={handleChange} variant="outlined" id="phone" label="Mobile Number" />
                  <Textarea
                    className="h-32"
                    variant="outlined"
                    placeholder="Message"
                    id="message"
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label>I'm not a robot</Label>
              </div> */}
              <Button gradientDuoTone='purpleToBlue' className="bg-purple-500" type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Submit'
              )}
              </Button>
              {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
            </form>
          </motion.div>
        </div>

        {People.map((people) => (
          <a key={people.id} href={people.href}>
            <motion.div
              animate={{}}
              onMouseOver={() => {
                setRotate(!rotate);
              }}
              onMouseLeave={() => {
                setRotate(!rotate);
              }}
              className="flex justify-between mx-32 flex-col md:flex-row text-center items-center gap-20 mt-10"
            >
              <div className="bg-white w-fit border border-blue-700 flex rounded-2xl mb-10 md:mb-0">
                <div className="flex ps-4 pe-4 gap-4">
                  <h1 className="text-blue-700 font-semibold text-2xl">
                    <span className="text-6xl ">{people.users} </span> <br />
                    Million
                  </h1>
                  <div className="w-28">
                    <motion.div
                      animate={{
                        rotate: rotate ? 360 : 0,
                        scale: rotate ? 0.7 : 1.2,
                      }}
                      transition={{ duration: 0.5 }}
                      onMouseOver={() => {
                        setRotate(!rotate);
                      }}
                      onMouseLeave={() => {
                        setRotate(!rotate);
                      }}
                      className="drop-shadow-lg circle w-20 h-20 md:w-12 md:h-12 bg-gradient-to-tl from-purple-800 to-blue-600 rounded-full my-auto"
                    ></motion.div>
                    <p className="justify-center items-center text-xs font-semibold font-sans mt-6">
                      REVENUE DRIVEN FOR OUR CLIENTS
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white w-fit border border-blue-700 flex-col md:flex rounded-2xl mb-10 md:mb-0">
                <div className="flex  ps-4 pe-4 gap-4">
                  <h1 className="text-blue-700 font-semibold text-2xl">
                    <span className="text-6xl ">{people.percentage}</span>{" "}
                    <br />%
                  </h1>
                  <div className="w-28">
                    <motion.div
                      animate={{
                        rotate: rotate ? 360 : 0,
                        scale: rotate ? 0.7 : 1,
                      }}
                      transition={{ duration: 0.5, iterationCount: "Infinity" }}
                      onMouseOver={() => {
                        setRotate(!rotate);
                      }}
                      onMouseLeave={() => {
                        setRotate(!rotate);
                      }}
                      className="drop-shadow-lg circle1 w-28 h-28 md:w-20 md:h-20 bg-gradient-to-tl from-purple-900 to-blue-600 rounded-full my-auto"
                    ></motion.div>
                    <p className="justify-center items-center text-xs font-semibold font-sans mt-2">
                      AVERAGE ONLINE TRAFFIC INCREASED
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white w-fit border border-blue-700 flex rounded-2xl mb-10 md:mb-0">
                <div className="flex  ps-4 pe-4 gap-4">
                  <h1 className="text-blue-700 font-semibold text-2xl">
                    <span className="text-6xl ">
                      {people.increasedTraffic}{" "}
                    </span>{" "}
                    <br />
                    Million
                  </h1>
                  <div className="w-28">
                    <motion.div
                      animate={{
                        rotate: rotate ? 360 : 0,
                        scale: rotate ? 1.4 : 1,
                      }}
                      transition={{ duration: 0.5 }}
                      onMouseOver={() => {
                        setRotate(!rotate);
                      }}
                      onMouseLeave={() => {
                        setRotate(!rotate);
                      }}
                      className="drop-shadow-lg circle2 w-20 h-20 md:w-10 md:h-10 bg-gradient-to-tl from-purple-800 to-blue-600 rounded-full my-auto"
                    ></motion.div>
                    <p className="justify-center items-center text-xs font-semibold font-sans mt-7">
                      AVERAGE ONLINE TRAFFIC INCREASED
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </a>
        ))}
        <section>
          <div className="">
            <h1 className="bg-gradient-to-r from-purple-500 via-white to-blue-500 mt-20 font-serif  text-6xl text-purple-800 text-center pt-5 pb-5">
              WHO ARE WE
            </h1>
            <div className="flex p-3 max-w-6xl mx-auto flex-col md:flex-row items-center gap-12 md:mt-10">
              <div className="">
                <h1 className="text-4xl font-serif">
                  We Create Stunning Websites That Drive Revenue
                </h1>
                <br />
                <p className="font-sans">
                  Web Design Pioneer is a leader in tech-enabled digital
                  marketing solutions with specialization in creating growth
                  driven websites. From web architecture to concept and creation
                  of custom designs catering to specific client need, we master
                  the art of create outstanding digital showcases.
                  <br />
                  <br />
                  As a result, we have driven over $42 million in sales and over
                  6 million hot leads for our clients in the past 5 years. The
                  brains behind robust strategy and critical design thinking are
                  all in-house strength. We are house of tech geeks, creative
                  beasts and development magicians. Our account managers are
                  certified web consultants, and you will love to talk to them.
                  They know everything that can boost your business within no
                  time!
                </p>
                <br />
                <Button pill gradientDuoTone="purpleToBlue" type="button">
                  Live Chat
                </Button>
              </div>
              <div className="section-img">
                <img src={imageMeet} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="text-center mt-16">
        <p className="text-6xl font-serif text-purple-800">Our Vision</p>
        <br />
        <p className="font-semibold text-2xl mx-auto">
          We accept change, lead with solution, and capitalize Opportunities{" "}
          <br /> to maximize client’s success.
        </p>
      </div>
      <div className="text-center  mt-16">
        <p className="bg-gradient-to-r from-purple-500 via-white to-blue-500 mt-20  font-serif text-6xl text-purple-800 text-center mb-20 pt-5 pb-5">
          Our Work
        </p>
        <CarouselCompo />
      </div>
      <p className="bg-gradient-to-r from-purple-500 via-white to-blue-500 mt-20  font-serif text-6xl text-purple-800 text-center pt-5 pb-5">
        Our Packages
      </p>
      <div className=" mt-10 flex justify-center">
        <div className="bg-white">
          <div className=" max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {Products.map((product) => (
                <a key={product.id} href={product.href} className="group">
                  {/* <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div> */}
                  <div>
                    <div className="w-72 h-fit bg-white drop-shadow-2xl me-10 rounded-2xl p-5 pb-5">
                      <h3 className="mt-4 text-2xl text-purple-900 font-serif ">
                        {product.name}
                      </h3>
                      <p>{product.subHeading}</p>
                      <div className="flex gap-3">
                        <p className="mt-1 text-3xl font-semibold text-purple-700">
                          {product.price}
                        </p>
                        <div>
                          <p className="mt-1 text-xs font-medium text-gray-900 line-through">
                            {product.priceOff}
                          </p>
                          <p>Only</p>
                        </div>
                        <Button type="button" gradientDuoTone="purpleToBlue">
                          Start Project
                        </Button>
                      </div>
                      <p className="mt-2 text-purple-800">What's included : </p>
                      <div className=" scrollbar-none float-start  max-h-40 overflow-y-scroll w-full text-start">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Sit rerum, quae dolores voluptatem, eveniet,
                          dolor consequuntur labore libero sunt iusto sed?
                          Minima, ipsum? Nam voluptatibus beatae ducimus dicta
                          atque. Voluptas amet nihil impedit autem nisi corporis
                          veniam, beatae rem, explicabo minus itaque blanditiis
                          debitis aspernatur accusamus quae in optio maxime.
                        </p>
                      </div>
                      <div className="">
                        <div className="inline-flex space-x-10  pt-2">
                          <div className="">
                            <p className="text-purple-900  font-serif">
                              Speak with us
                            </p>
                            <br />
                            <p className="text-xs">+91 92169 58469</p>
                            <p className="text-xs">+91 92169 58469</p>
                          </div>
                          <div className="">
                            <p className="text-purple-900 font-serif">
                              Chat with us
                            </p>
                            <br />
                            <p className="text-sm">Live Chat Now</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto">
        <p className="bg-gradient-to-r font-serif  from-purple-500 via-white to-blue-500 text-center text-6xl text-purple-800 p-5">
          Business Catalyst Packages
        </p>
        <div className="md:flex justify-around mt-20">
          <div className="mx-32">
            <motion.img
              animate={{ scale: rotate ? 1 : 1.2 }}
              transition={{ duration: 0.5 }}
              onLoad={() => {
                setRotate(!rotate);
              }}
              onMouseOver={() => {
                setRotate(!rotate);
              }}
              onMouseLeave={() => {
                setRotate(!rotate);
              }}
              className="w-96 "
              src={BCPImage}
              alt=""
            />
          </div>
          <div className=" bg-white drop-shadow-2xl  m-10 text-xs">
            <div className="text-center md:text-start md:flex space-x-32 p-10 me-10 w-full ">
              <div className="flex-col md:flex-wrap w-full justify-center">
                <p className="text-purple-900 font-serif text-2xl">Logo</p>
                <li>Unlimited Logo Design Concepts</li>
                <li>Unlimited Logo Design Concepts</li>
                <li>Unlimited Logo Design Concepts</li>
                <li>Unlimited Logo Design Concepts</li>
                <li>Unlimited Logo Design Concepts</li>
                <br />
                <hr style={{ height: "5px" }} color="purple" /> <br />
                <p className="text-purple-900 font-serif  text-2xl">
                  Website
                </p>
                <li>Unlimited Logo Design Concepts</li>
                <li>Unlimited Logo Design Concepts</li>
                <li>Unlimited Logo Design Concepts</li>
                <li>Unlimited Logo Design Concepts</li>
                <li>Unlimited Logo Design Concepts</li>
                <br />
                <hr style={{ height: "5px" }} color="purple" /> <br />
                <p className="text-purple-900 font-serif text-2xl">
                  Stationary
                </p>
                <li>Unlimited Logo Design Concepts</li>
                <li>Unlimited Logo Design Concepts</li>
                <li>Unlimited Logo Design Concepts</li>
                <li>Unlimited Logo Design Concepts</li>
                <li>Unlimited Logo Design Concepts</li>
                <br />
                <div className="block md:hidden">
                  <hr style={{ height: "5px" }} color="purple" /> <br />
                  <p className="text-purple-900 font-serif  text-2xl">
                    Social Media Design
                  </p>
                  <li>Unlimited Logo Design Concepts</li>
                  <li>Unlimited Logo Design Concepts</li>
                  <li>Unlimited Logo Design Concepts</li>
                  <li>Unlimited Logo Design Concepts</li>
                  <li>Unlimited Logo Design Concepts</li>
                  <br />
                  <hr style={{ height: "5px" }} color="purple" /> <br />
                  <p className="text-purple-900 font-serif  text-2xl">
                    Feature
                  </p>
                  <li>Unlimited Logo Design Concepts</li>
                  <li>Unlimited Logo Design Concepts</li>
                  <li>Unlimited Logo Design Concepts</li>
                  <li>Unlimited Logo Design Concepts</li>
                  <li>Unlimited Logo Design Concepts</li>
                  <br /> <br />
                  <Button
                    gradientDuoTone="purpleToBlue"
                    className="ps-10 pe-10 mt-10 ms-10"
                  >
                    Start project
                  </Button>
                </div>
              </div>
              <div className="w-full hidden md:block ">
                <p className="text-purple-900 font-serif  text-2xl">
                  Social Media Design
                </p>
                <li>Unlimited Logo Design Concepts</li>
                <li>Unlimited Logo Design Concepts</li>
                <li>Unlimited Logo Design Concepts</li>
                <li>Unlimited Logo Design Concepts</li>
                <li>Unlimited Logo Design Concepts</li>
                <br />
                <hr style={{ height: "5px" }} color="purple" /> <br />
                <p className="text-purple-900 font-serif text-2xl">
                  Feature
                </p>
                <li>Unlimited Logo Design Concepts</li>
                <li>Unlimited Logo Design Concepts</li>
                <li>Unlimited Logo Design Concepts</li>
                <li>Unlimited Logo Design Concepts</li>
                <li>Unlimited Logo Design Concepts</li>
                <br /> <br />
                <Button
                  gradientDuoTone="purpleToBlue"
                  className="ps-10 pe-10 mt-10 ms-10"
                >
                  Start project
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-4xl font-serif   md:ps-40 md:pe-40 md:pt-20 md:ms-20 md:me-20 text-purple-900">
            A Website Will Make Money for You Even While You Are Asleep
          </p>{" "}
          <br />
          <p className="md: text-sm md:block hidden ">
            94% of first impression of the business is related to website
            design. <br /> With us, you will never loose a customer again. We
            consult for free, so <br /> hope over for a call or simply chat with
            the best design consults.
          </p>
          <p className="md: text-sm md:hidden block p-5">
            94% of first impression of the business is related to <br /> website
            design.With us, you will never loose a customer again. We
            consult for free, so hope over for a call or <br /> simply chat with
            the best design consults.
          </p>
          <br />
          <div className="flex flex-col justify-center items-center text-xl">
            <div className="flex  space-x-4 ">
              <FaPhoneAlt className="mt-1" />
              <p className="font-semibold">+91 92169 58469</p>
            </div>
            <div className="flex space-x-10">
              <Button gradientDuoTone="purpleToBlue" className="ps-5 pe-5 mt-5">
                Get Started
              </Button>
              <Button gradientDuoTone="purpleToBlue" className="ps-5 pe-5 mt-5">
                Live Chat
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-tr from-purple-200 via-white to-blue-300 pt-1 mt-20">
          <p className="bg-purple-700 rounded-xl text-white md:text-8xl text-5xl text-center md:text-start font-semibold md:ps-10 m-5 p-5 md:m-20 md:pt-28 md:pb-5 justify-around">
            Contact Us
          </p>
          <div className="md:flex">
            <div className="">
              {Address.map((address) => (
                <a key={address.headOffice}>
                  <div className="space-y-3 m-20">
                    <p className="text-6xl font-serif text-purple-800">Address</p>
                    <p className="w-full">
                      <span className="md:text-xl text-2xl text-purple-800">
                        Head Office:
                      </span>{" "}
                      {address.headOffice}
                    </p>
                    <p>
                      <span className="md:text-xl text-2xl text-purple-800">
                        Branch Office:
                      </span>{" "}
                      {address.branchOffice}
                    </p>
                  </div>
                </a>
              ))}
            </div>
            <div className="drop-shadow-lg p-2 flex md:-mt-64 md:me-28 justify-center ">
              <div className="drop-shadow-2xl md:w-16 h-32 bg-blue-600 rounded-s-full mt-72"></div>
              <form onSubmit={handleSubmit} className="flex space-y-20 flex-col gap-4 p-4 md:w-96 bg-white rounded-3xl drop-shadow-lg justify-center">
                <div>
                  <h1 className="text-center font-serif text-2xl text-teal-500">
                    Contact Us
                  </h1>
                  <h1 className="text-center text-xl">
                    Get 30X more Sales With US!
                  </h1>
                  <div className="mb-0 mt-2 block space-y-5">
                    <FloatingLabel
                      variant="outlined"
                      label="Username"
                      id="username"
                      type="text"
                      required
                      onChange={handleChange}
                    />
                    <FloatingLabel
                      variant="outlined"
                      label="Username@mail.com"
                      id="usermail"
                      required
                      onChange={handleChange}
                    />
                    <FloatingLabel
                      variant="outlined"
                      label="Mobile Number"
                      type="tel"
                      required
                      id="phone"
                      onChange={handleChange}
                    />
                    <Textarea
                      variant="outlined"
                      className="h-20"
                      placeholder="Message"
                      required
                      id="message"
                      onChange={handleChange}
                    />
                  </div>
                  {errorMessage && (
            <Alert className='mt-5' color='failure'>
              {errorMessage}
            </Alert>
          )}
                </div>
                {/* <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label>I'm not a robot</Label>
                </div> */}
                <Button
                  gradientDuoTone="purpleToBlue"
                  className="bg-purple-500"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? (
                <>
                  <Spinner size='sm' />
                  <span className='pl-3'>Loading...</span>
                </>
              ) : (
                'Submit'
              )}
                </Button>
              </form>
            </div>
          </div>
          <FooterDivider className="h-0.5" color="purple" />
          <FooterCopyright
            className="text-center"
            href="#"
            by="Web Design Pioneer"
            year={new Date().getFullYear()}
          />
          <p className="text-center mt-1 pb-5">
            Terms & Conditions Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
}
