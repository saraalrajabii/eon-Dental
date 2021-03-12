
//   import React from "react";
// import  {useState} from 'react';
// import Select from "react-select";
// function Select2 () {

//   const [selectedOption, setSelectedOption] = useState([]); 
//   const [selectedOption2, setSelectedOption2] = useState({}); 
//   const [selectedOption3, setSelectedOption3] = useState({}); 
//   const handleChange1 = selectedOption => {
//     setSelectedOption( selectedOption );
//   };
//   const handleChange2 = selectedOption => {
//     setSelectedOption2({selectedOption2:selectedOption });
//   };
//   const handleChange3 = selectedOption => {
//     setSelectedOption3(selectedOption );
//   };
//     const options1 = [
//                 { value: "jo", label: "Jordan" },
//                 { value: "sa", label: "Saudi Arabia" },
//                 { value: "kw", label: "Kuwait" },
//                 { value: "qa", label: "Qatar" },
//                 { value: "ae", label: "Dubai" },
//             ];
//             const options2 = [
//                 {value: 'dubai', label: 'Dubai', link: 'ae'},
//                 {value: 'abudhabi', label: 'Abu Dhabi', link: 'ae'},
//                 {value: 'amman', label: 'Amman', link: 'jo'},
//                 {value: 'doha', label: 'Doha', link: 'qa'},
//                 {value: 'kuwait', label: 'Kuwait', link: 'kw'},
//                 {value: 'riyadh', label: 'Riyadh', link: 'sa'},
//                 {value: 'jeddah', label: 'Jeddah', link: 'sa'},
//                 {value: 'khobar', label: 'Khobar', link: 'sa'},
//                 {value: 'dhahran', label: 'Dhahran', link: 'sa'},
//                 {value: 'dammam', label: 'Dammam', link: 'sa'}
//             ];
//             const options3 = [
//                 { value: "+962", label: "+962", code: "jo" },
//                 { value: "+966", label: "+966", code: "sa" },
//                 { value: "+965", label: "+965", code: "kw" },
//                 { value: "+974", label: "+974", code: "qa" },
//               ];




//     const filteredOptions = options2.filter (o => o.link.includes(selectedOption.value) )
//    console.log(selectedOption )
//     console.log(filteredOptions)
//     const filteredOptions3= options3.filter (o => o.code === selectedOption.value )
//    let sara = (selectedOption3.value) ? selectedOption3 : filteredOptions3;
//    console.log(selectedOption3)
//    console.log(filteredOptions3)
//    console.log(sara)
//     return (
//       <div>
//         <p>Select one first</p>
//         <Select
//           name="form-field-name"
//           value={selectedOption}
//           onChange={handleChange1}
//           options={options1}
//         />
//         <p>Then the other</p>
//         <Select
//           name="form-field-name"
//           value={selectedOption2.value}
//           onChange={handleChange2}
//           options={filteredOptions}
//         />
//           <p>Then the other</p>
//           <Select
//           name="form-field-name"
//           value= {sara}
//           onChange={handleChange3}
//           options={options3}
//         />
//       </div>
//     );
//   }
//   export default Select2;