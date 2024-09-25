import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

const testimonialList = [
	{
		photo:
			"https://cdn.easyfrontend.com/pictures/testimonial/testimonial_19.png",
		name: "John Coates",
		position: "Content Writer",
		from: "UK",
		content:
			'“I was really impressed with the level of service I received from this car rental company. The process was smooth and easy, and the car I rented was in excellent condition. The staff was friendly and helpful, and I felt well taken care of throughout my rental period. I would definitely recommend this company to anyone looking for a premium car rental experience.”',
	},
	{
		photo:
			"https://i.pinimg.com/564x/a8/17/a9/a817a97c3ef4a88b859ba4f3b70d5a7f.jpg",
		name: "Ellica Perry",
		position: "Project Manager",
		from: "BD",
		content:
			'"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus magni tempore provident? Quaerat, dicta saepe praesentium eaque nobis corrupti aut, quibusdam provident consequatur."',
	},
];

const Testimonials = () => {
	const [index, setIndex] = useState(0);
	const { photo, name, position, content, from } = testimonialList[index];

	const handleControl = (type) => {
		if (type === "prev") {
			setIndex(index <= 0 ? testimonialList.length - 1 : index - 1);
		} else if (type === "next") {
			setIndex(index >= testimonialList.length - 1 ? 0 : index + 1);
		}
	};
	return (
		<section id="customer" className=" py-14 md:py-24 w-full lg:py-32 overflow-x-hidden bg-white  text-zinc-900 relative z-[1]">
			<div className="container px-2 mx-auto relative">
				<div>
					<div className="grid grid-cols-12 gap-y-6 md:gap-y-0 md:gap-x-6">
						<div className="col-span-12 md:col-span-6 md:col-start-2 relative">
							<div className="flex justify-center items-center h-full">
								<div>
									<div className="bg-white shadow-xl rounded-xl z-10 relative py-14 px-9 md:py-20 md:px-12 md:-mr-24">
										<p className="mb-6 opacity-80">"{content}"</p>
										<h5 className="text-[19px] font-medium">
											-{name}, {position}, {from}
										</h5>
									</div>
								</div>
							</div>
						</div>
						<div className="col-span-12 md:col-span-4 text-center md:text-start">
							<div className="flex absolute items-center justify-center h-full pr-2 lg:pr-0">
								<img 
									src={photo}
									alt={name}
									className="lg:w-[350px]  object-center h-[450px] rounded-xl -z-[1] mx-auto"
								/>
							</div>
						</div>
					</div>

					<button
						className="absolute -top-20 lg:-top-28 right-44 bg-blue-600 text-white mt-8 sm:mt-0  bg-black p-4  bg-opacity-75 hover:bg-opacity-100 w-12 h-12 flex justify-center items-center rounded-full"
						onClick={() => handleControl("prev")}
					>
						<FaAnglesLeft />
					</button>
					<button
						className="absolute -top-20 lg:-top-28  right-28 bg-blue-600 mt-8 sm:mt-0 text-white bg-opacity-75 bg-black p-4  hover:bg-opacity-100 w-12 h-12 flex justify-center items-center rounded-full"
						onClick={() => handleControl("next")}
					>
						<FaAnglesRight />
					</button>
				</div>
			</div>
		</section>
	);
};
export default Testimonials