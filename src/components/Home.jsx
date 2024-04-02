import React from "react";
import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading, Input } from "../components";
import WEBVersionLightfield from "../components/WEBVersionLightfield";
import { Navbar } from "./Navbar";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Mayur's Portfolio</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-slate-950">
      <Navbar/>
      
        <div className="flex justify-center p-4 bg-blue_gray-900_01">
          <div className="flex flex-col w-[83%] md:w-full mb-[123px] gap-[122px] md:gap-[91px] sm:gap-[61px]">
            
            <div className="flex md:flex-col justify-between items-center gap-5">
              <div className="flex flex-col items-start w-[39%] md:w-full gap-[30px]">
                <Text as="p" className="!text-deep_orange-400_01 tracking-[3.00px] uppercase">
                  mayur mundankar
                </Text>
                <Heading size="2xl" as="h2" className="tracking-[-2.00px] leading-[80px]">
                  <>
                    The Simple, <br />
                    Clean Design
                  </>
                </Heading>
                <Text as="p" className="w-[95%] md:w-full !text-white-A700_a3 leading-8">
                  Designing User Interfaces & creating User Experiences that provides Solution
                </Text>
                <Button size="xs" shape="round" className="sm:px-5 uppercase font-black min-w-[154px]">
                  See My Work
                </Button>
              </div>
              <div className="h-[554px] w-[49%] md:w-full relative">
                <div className="flex flex-col items-start justify-end w-[72%] bottom-[0.04px] right-0 left-0 p-2 m-auto bg-blue_gray-800 absolute rounded-[204px]">
                  <Img
                    src="images/img_combined_shape.svg"
                    alt="combinedshape"
                    className="h-[122px] mt-[269px] ml-[90px] md:ml-0"
                  />
                </div>
                <div className="flex sm:flex-col justify-center items-center w-[97%] h-max left-0 bottom-0 right-0 top-0 m-auto absolute sm:relative">
                  <Img
                    src="images/img_block.svg"
                    alt="block_one"
                    className="self-end h-[143px] sm:w-full mb-11 z-[1]"
                  />
                  <div className="flex items-start sm:self-stretch ml-[-163px] sm:ml-0 relative flex-1">
                    <Img
                      src="images/img_combined_shape_blue_gray_400.svg"
                      alt="combinedshape"
                      className="h-[172px] mt-[13px]"
                    />
                    <Img
                      src="images/img_bitmap.png"
                      alt="bitmap_one"
                      className="w-[71%] ml-[-3px] relative object-cover"
                    />
                  </div>
                </div>
                <div className="flex justify-center items-center h-[225px] w-[40%] md:h-auto left-[0.00px] top-[0.00px] px-14 py-[87px] m-auto md:p-5 bg-[url(/public/images/img_group_19.svg)] bg-cover bg-no-repeat absolute">
                  <Img src="images/img_refresh.svg" alt="refresh_one" className="h-[48px] w-[48px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="px-14 py-[71px] md:p-5">
          <div className="flex flex-col w-full mb-[22px] gap-[85px] mx-auto md:gap-[63px] sm:gap-[42px] max-w-[1171px]">
            <div className="flex md:flex-col justify-between items-start gap-5">
              <div className="h-[550px] w-[45%] md:w-full relative">
                <Img
                  src="images/img_rectangle.svg"
                  alt="image"
                  className="h-[362px] left-[0.00px] top-[9%] m-auto absolute rounded-md"
                />
                <div className="flex sm:flex-col items-center w-[93%] bottom-[-0.05px] right-0 left-0 m-auto absolute sm:relative">
                  <Img src="images/img_path.svg" alt="path_one" className="self-end h-[130px] sm:w-full mb-[59px]" />
                  <Img
                    src="images/img_rectangle_amber_300.svg"
                    alt="image_one"
                    className="h-[282px] sm:w-full ml-[-81px] sm:ml-0 relative rounded-md"
                  />
                </div>
                <Img
                  src="images/img_combined_shape_deep_orange_100_01.svg"
                  alt="combinedshape"
                  className="h-[252px] right-[12.53px] top-[0.00px] m-auto absolute"
                />
                <div className="flex flex-col items-start w-[89%] right-[-0.70px] top-[23.66px] m-auto absolute">
                  <div className="w-[43%] md:w-full ml-[41px] pt-[5px] px-[5px] md:ml-0 z-[1] bg-red-A100 rounded-[92px]">
                    <Img
                      src="images/img_bitmap_179x165.png"
                      alt="bitmap_three"
                      className="w-full md:h-auto object-cover rounded-[82px]"
                    />
                  </div>
                  <div className="self-stretch mt-[-44px] relative bg-gray-500 rounded-md">
                    <Img
                      src="images/img_bitmap_290x470.png"
                      alt="bitmap_five"
                      className="h-[290px] w-full md:h-auto object-cover rounded-md"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start w-[40%] md:w-full mt-[54px]">
                <Text as="p" className="!text-deep_orange-400_01 tracking-[3.00px] uppercase">
                  Mayur mundankar
                </Text>
                <Heading size="xl" as="h2" className="mt-[29px] !text-gray-900 tracking-[-1.00px] leading-[64px]">
                  <>
                    Professional
                    <br />
                    Jr. Web Designer
                  </>
                </Heading>
                <Text as="p" className="mt-5 !text-gray-900_a3 leading-8">
                  Mayur is a UI designer by passion and engineer by profession, with a deep-rooted love for art. His
                  journey commenced in the realm of creativity, where he delved into diverse artistic mediums.
                </Text>
                <Button
                  color="white_A700"
                  size="xs"
                  shape="round"
                  className="mt-[34px] sm:px-5 uppercase font-black min-w-[138px]"
                >
                  About Me
                </Button>
              </div>
            </div>
            <div className="flex md:flex-col">
              <div className="flex justify-between items-center w-full gap-5 p-8 sm:p-5 rounded-tl-md rounded-bl-md border-deep_orange-100 border border-solid">
                <div className="w-[34%] ml-4 p-[22px] md:ml-0 sm:p-5 bg-deep_orange-400 rounded-[56px]">
                  <Img src="images/img_dashboard.svg" alt="image" className="h-[54px] w-full md:h-auto mt-0.5 mb-2.5" />
                </div>
                <div className="flex flex-col items-start mr-[181px] gap-[26px] md:mr-0">
                  <Heading as="h3" className="!text-gray-900">
                    94%
                  </Heading>
                  <Text size="md" as="p" className="!text-gray-900">
                    Efficiency in Work
                  </Text>
                </div>
              </div>
              <div className="flex justify-between items-center w-full gap-5 p-8 sm:p-5 rounded-tr-md rounded-br-md border-deep_orange-100 border border-solid bg-red-50">
                <div className="flex flex-col items-center justify-center ml-4 p-8 md:ml-0 sm:p-5 bg-deep_orange-400 rounded-[56px]">
                  <Img src="images/img_bag.svg" alt="bag_one" className="h-[39px] mt-[3px] mb-1.5" />
                </div>
                <div className="flex flex-col items-start mr-[158px] gap-[26px] md:mr-0">
                  <Heading as="h4" className="!text-gray-900">
                    2+
                  </Heading>
                  <Text size="md" as="p" className="!text-gray-900">
                    Projects Completed
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <div className="flex ml-[155px] p-[18px] md:ml-0 z-[1] bg-deep_orange-400 rounded-[38px]">
            <Img src="images/img_contrast.svg" alt="contrast_one" className="h-[40px] w-[40px]" />
          </div>
          <div className="self-stretch mt-[-37px] p-[47px] md:p-5 relative bg-deep_orange-50">
            <div className="flex md:flex-col justify-between items-start w-full gap-5 mx-auto max-w-[1170px]">
              <div className="flex flex-col items-start w-[52%] md:w-full mt-[29px] gap-[18px]">
                <Text as="p" className="!text-deep_orange-400_01 tracking-[3.00px] uppercase">
                  fun fact
                </Text>
                <Heading size="md" as="h2" className="w-[90%] md:w-full !text-gray-900 leading-8">
                  My design philosophy: If it doesn&#39;t make you smile, it&#39;s back to the drawing board. Let&#39;s
                  create something that wows!
                </Heading>
                <Text as="p" className="!text-gray-900_a3">
                  Pixel perfect? Maybe not. But I put my heart and soul into every design I craft.
                </Text>
              </div>
              <div className="h-[242px] w-[29%] md:w-full relative">
                <Img
                  src="images/img_path_deep_orange_100_01.svg"
                  alt="path_three"
                  className="h-[242px] right-[13.97px] bottom-0 top-0 my-auto absolute"
                />
                <div className="h-[192px] w-full bottom-[17.00px] right-0 left-0 m-auto absolute">
                  <div className="flex items-start w-[85%] bottom-[0.00px] right-0 left-0 m-auto absolute">
                    <div className="flex items-start z-[1] flex-1">
                      <div className="h-[40px] w-[40px] mt-2 z-[1] bg-amber-300 rounded-[20px]" />
                      <div className="h-[176px] ml-[-32px] relative bg-white-A700 shadow-sm flex-1 rounded-md" />
                    </div>
                    <Img
                      src="images/img_combined_shape_deep_orange_400_01.svg"
                      alt="combinedshape"
                      className="h-[56px] mt-2 ml-[-86px] relative"
                    />
                  </div>
                  <div className="h-[176px] w-[91%] left-0 bottom-0 right-0 top-0 m-auto bg-white-A700 shadow-sm absolute rounded-md" />
                  <div className="h-[176px] w-full bg-white-A700 shadow-sm absolute rounded-md" />
                  <div className="h-[14px] w-[22%] left-[24.02px] top-[41%] m-auto bg-red-100 absolute rounded-sm" />
                  <div className="h-[6px] w-[37%] bottom-[45%] left-[24.02px] m-auto bg-red-100 absolute rounded-[3px]" />
                  <div className="h-[6px] w-[86%] bottom-[22%] right-0 left-0 m-auto bg-purple-50 relative rounded-[3px]">
                    <div style={{ width: "39%" }} className="h-full bg-purple-A200 absolute rounded-[3px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col justify-between items-center gap-5 p-[117px] md:p-5 bg-blue_gray-900_01">
          <div className="flex flex-col items-start w-[51%] md:w-full ml-12 p-12 md:p-5 md:ml-0 bg-white-A700 rounded-md">
            <Heading size="md" as="h2" className="mt-2.5 !text-gray-900">
              Get In Touch
            </Heading>
            <div className="self-stretch">
              <div>
                <Input
                  size="sm"
                  shape="square"
                  type="email"
                  name="email"
                  placeholder={`Your email`}
                  className="sm:pr-5"
                />
                <WEBVersionLightfield
                  viewFive={true}
                  placeholder="Subject"
                  imageTwo="images/img_triangle.svg"
                  className="h-[76px] mt-[-12px] relative"
                />
              </div>
              <div className="h-[156px] mt-[-12px] z-[1] relative">
                <div className="h-[128px] w-full border-deep_orange-100 border border-solid bg-white-A700 absolute rounded-md" />
                <Text as="p" className="left-[16.00px] top-[28%] m-auto !text-gray-900_a3 absolute">
                  Message
                </Text>
              </div>
            </div>
            <Button size="xs" shape="round" className="self-end mt-8 sm:px-5 uppercase font-black min-w-[154px]">
              Submit Now
            </Button>
          </div>
          <div className="flex flex-col items-start w-[37%] md:w-full mr-12 md:mr-0">
            <Text as="p" className="!text-deep_orange-400_01 tracking-[3.00px] uppercase">
              Contact
            </Text>
            <Heading size="xl" as="h2" className="mt-[27px] tracking-[-1.00px]">
              Contact Me
            </Heading>
            <Text as="p" className="mt-[35px] !text-white-A700_a3 leading-8">
              Want to work with me? or just wanna say hello? Feel free to contact!
            </Text>
            <div className="flex items-center mt-[33px] gap-4">
              <Button shape="circle" className="w-[48px] !rounded-[24px]">
                <Img src="images/img_linkedin.svg" />
              </Button>
              <Text size="md" as="p" className="self-end mb-[11px]">
                Pune, Maharashtra, India
              </Text>
            </div>
            <div className="flex items-center mt-4 gap-4">
              <Button shape="circle" className="w-[48px] !rounded-[24px]">
                <Img src="images/img_call.svg" />
              </Button>
              <Text size="md" as="p">
                +91-7769858440
              </Text>
            </div>
            <div className="flex items-center mt-5 gap-4">
              <Button shape="circle" className="w-[48px] !rounded-[24px]">
                <Img src="images/img_lock.svg" />
              </Button>
              <Text size="md" as="p">
                uiux.mayur@gmail.com
              </Text>
            </div>
          </div>
        </div>
        <footer className="flex flex-col items-center justify-center gap-[57px] p-[49px] md:p-5 sm:gap-7 bg-blue_gray-900_01">
          <div className="flex md:flex-col justify-between items-start w-full gap-5 mx-auto max-w-[1129px]">
            <div className="flex justify-between items-start w-[51%] md:w-full gap-5">
              <Img src="images/img_mayur_logo.svg" alt="mayurlogo_three" className="h-[26px]" />
              <div className="flex flex-col items-center mt-[9px] gap-6">
                <Text as="p" className="!text-deep_orange-400_01 tracking-[3.00px] uppercase">
                  Menu
                </Text>
                <ul className="flex flex-col items-start gap-5">
                  <li>
                    <a href="#">
                      <Text as="p" className="text-center">
                        About me
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="text-center">
                        Work
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="text-center">
                        Blog
                      </Text>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Text as="p" className="text-center">
                        Contact
                      </Text>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex gap-2">
              <Button shape="circle" className="w-[48px] !rounded-[24px]">
                <Img src="images/img_link.svg" />
              </Button>
              <Button shape="circle" className="w-[48px] !rounded-[24px]">
                <Img src="images/img_trash.svg" />
              </Button>
              <Button shape="circle" className="w-[48px] !rounded-[24px]">
                <Img src="images/img_info.svg" />
              </Button>
            </div>
          </div>
          <div className="h-px w-full mx-auto md:p-5 bg-blue_gray-800_01 max-w-[1170px]" />
          <Text as="p" className="mb-[9px] !text-white-A700_a3">
            Copyright © 2024 Mayur Mundankar. All Rights Reserved.
          </Text>
        </footer>
      </div>
    </>
  );
}
