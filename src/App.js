import React from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { useState } from "react";
import  { useEffect} from 'react';
import { RiArrowRightSLine } from "react-icons/ri";
import { LiaCarSideSolid } from "react-icons/lia";
import { TbBrandToyota } from "react-icons/tb";
import {
  SiCadillac,
  SiChevrolet,
  SiChrysler,
  SiDaimler,
  SiFiat,
  SiFord,
  SiHonda,
  SiHyundai,
  SiLandrover,
  SiMaserati,
  SiMclaren,
  SiMg,
  SiRenault,
  SiRollsroyce,
  SiSkoda,
  SiSubaru,
  SiTesla,
  SiVauxhall,
  SiVolkswagen,
  SiMini,
  SiOpel,
  SiPeugeot,
  SiSmart,
  SiXiaomi,
} from "react-icons/si";
import { SiSuzuki } from "react-icons/si";
import { SiNissan } from "react-icons/si";
import { SiAlfaromeo } from "react-icons/si";
import { SiBmw } from "react-icons/si";
import { SiAudi } from "react-icons/si";
import { SiBugatti } from "react-icons/si";
import { SiVolvo } from "react-icons/si";
import { SiBentley } from "react-icons/si";
import { SiJaguar } from "react-icons/si";
import { SiJeep } from "react-icons/si";
import { SiLamborghini } from "react-icons/si";
import { SiFerrari } from "react-icons/si";
import { SiKia } from "react-icons/si";
import { SiLada } from "react-icons/si";
import { SiMazda } from "react-icons/si";
import { SiMercedes } from "react-icons/si";
import { SiMitsubishi } from "react-icons/si";
import { SiPorsche } from "react-icons/si";
import { SiUnitednations } from "react-icons/si";
import { GiCartwheel } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
// import { Input } from "@mui/material";
import { toast } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import SearchCar from "./SearchCar";
// import { useNavigate } from "react-router-dom";


function App() {
  const [wheelTypeAccordian, setwheelTypeAccordian] = useState(true);
  const [dimensionTypeAccordian, setdimensionTypeAccordian] = useState(false);
  const [engineTypeAccordian, setengineTypeAccordian] = useState(false);
  const [steeringAccordian, setsteeringAccordian] = useState(false);
  const [suspensionAccordian, setsuspensionAccordian] = useState(false);
  const [make,setMake]=useState(1)
  const [fuelEconomyAccordian, setfuelEconomyAccordian] = useState(false);
  const [wheelsAndTyres, setWheelsAndTyres] = useState(false);
  const [safetyAccordian, setSafetyAccordian] = useState(false);
  const [image,setImage]=useState(null)
  const [exteriorAccordian, setExteriorAccordian] = useState(false);
  const [instrumentAccordian, setInstrumentAccordian] = useState(false);
  const [entertainmentAccordian, setEntertainmentAccordian] = useState(false);
  const [comfortAccordian, setcomfortAccordian] = useState(false);
  const [carVersion, setCarVersion] = useState([]);
  const [loading,setLoading]=useState(false)
  const [transmissionTable,setTransmissionTable]=useState(false)
  // const navigate = useNavigate()
const [carDataTable,setCarDataTable]=useState({
    id:null,
    price:"",
    name: "",  
    car_version_Arb_name: "",
    image:"",
    imagesrc_id:null,
  fuelType: {
    id: null  
  },
  model: {
    id: null  
  },  
  vehicleType: {
    id: null  
  },
  wheelDriveType: {
    id: null   
  },
  transmission: {
    id: null  
},
gearbox: {
    id: null  
},
  year: null ,
  dimension:{
    overallLength: null,
    overallWidth: null,
    overallHeight: null,
    wheelBase: null,
    groundClearance: null,
    kerbWeight: null,
    bootSpace: null,
    numberofdoor:{
      id: null
    },
    numberofseating:{
      id:null
    },
},
engine:{
  engineType: "",
  displacement: null,
  horsepower: null,
  numberofcylinder:{
    id:null
    },
  torque: null,
  cylinderConfiguration: "",
  compressionRatio: null,
  valvesPerCylinder: null,
  valveMechanism: "",
  fuelSystem: "",
  maxSpeedKmh: null
},
steering:{
  steeringType: "",
  powerAssisted: "",
  minimumTurningRadius: null
},
wheelstyres:{
  wheelType: "",
  wheelSizeIn: null,
  pcd: "",
  tyreSize: null,
  spareTyreSizeValue: "",
  spareTyreSizeIn: null
},
suspensionBrakes:{
   suspensionType: "",
  brakeType: ""
},
fuelEconomy:{
  fuelTankCapacity: null,
  mileageCityKml: null,
  mileageHighwayKml: null
},
carVersionFeatures:[
  {value: "", feature:{id: 1}},
  {value: "", feature:{id: 2}},
  {value: "", feature:{id: 3}},
  {value: "", feature:{id: 4}},
  {value: "", feature:{id: 5}},
  {value: "", feature:{id: 6}},
  {value: "", feature:{id: 7}},
  {value: "", feature:{id: 8}},
  {value: "", feature:{id: 9}},
  {value: "", feature:{id: 10}},
  {value: "", feature:{id: 11}},
  {value: "", feature:{id: 12}},
  {value: "", feature:{id: 13}},
  {value: "", feature:{id: 14}},
  {value: "", feature:{id: 15}},
  {value: "", feature:{id: 16}},
  {value: "", feature:{id: 17}},
  {value: "", feature:{id: 18}},
  {value: "", feature:{id: 19}},
  {value: "", feature:{id: 20}},
  {value: "", feature:{id: 21}},
  {value: "", feature:{id: 22}},
  {value: "", feature:{id: 23}},
  {value: "", feature:{id: 24}},
  {value: "", feature:{id: 25}},
  {value: "", feature:{id: 26}},
  {value: "", feature:{id: 27}},
  {value: "", feature:{id: 28}},
  {value: "", feature:{id: 29}},
  {value: "", feature:{id: 30}},
  {value: "", feature:{id: 31}},
  {value: "", feature:{id: 32}},
  {value: "", feature:{id: 33}},
  {value: "", feature:{id: 34}},
  {value: "", feature:{id: 35}},
  {value: "", feature:{id: 36}},
  {value: "", feature:{id: 37}},
  {value: "", feature:{id: 38}},
  {value: "", feature:{id: 39}},
  {value: "", feature:{id: 40}},
  {value: "", feature:{id: 41}},
  {value: "", feature:{id: 42}},
  {value: "", feature:{id: 43}},
  {value: "", feature:{id: 44}},
  {value: "", feature:{id: 45}},
  {value: "", feature:{id: 46}},
  {value: "", feature:{id: 47}},
  {value: "", feature:{id: 48}},
  {value: "", feature:{id: 49}},
  {value: "", feature:{id: 50}},
  {value: "", feature:{id: 51}},
  {value: "", feature:{id: 52}},
  {value: "", feature:{id: 53}},
  {value: "", feature:{id: 54}},
  {value: "", feature:{id: 55}},
  {value: "", feature:{id: 56}},
  {value: "", feature:{id: 57}},
  {value: "", feature:{id: 58}},
  {value: "", feature:{id: 59}},
  {value: "", feature:{id: 60}},
  {value: "", feature:{id: 61}},
  {value: "", feature:{id: 62}},
  {value: "", feature:{id: 63}},
  {value: "", feature:{id: 64}},
  {value: "", feature:{id: 65}},
  // {value: "", carVersionId: "62"},
]
}
)
console.log(carDataTable)
// const carVersions = [
//   { id: 1, version: "Gli 1.8" },
//   { id: 2, version: "Grande 1.6" },
//   { id: 3, version: "Corolla Altis" },
//   { id: 4, version: "WxB Hybrid" },
//   { id: 5, version: "F 1.0" }
// ];
/* Car Version Array < */
const handleFeatureChange = (id, value) => { 
  setCarDataTable((prevData) => {
    const updatedFeatures = prevData.carVersionFeatures.map((feature) => {
      // Check for either featuresId or carVersionId
      if (feature.feature.id === id ) {
        return { ...feature, value: value }; // Update the value for the matching id
      }
      return feature; // Return unchanged feature
    });

    return { ...prevData, carVersionFeatures: updatedFeatures }; // Return updated state
  });
};


/* Here is Makes > */
const makeData = {
  popular: [
    { name: { en: "Toyota", er: "تويوتا", id: 1 }, icon: <TbBrandToyota /> },
    { name: { en: "Suzuki	", er: "سوزوكي", id: 2 }, icon: <SiSuzuki /> },
    { name: { en: "Honda", er: "هوندا", id: 3 }, icon: <SiHonda /> },
    {
      name: { en: "Daihatsu	", er: "دايهاتسو", id: 4 },
      icon: <GiCartwheel />,
    },
  ],
  others: [
    { name: { en: "Adam", er: "آدم	", id: 5 }, icon: <GiCartwheel /> },
    {
      name: { en: "Alfa Romeo", er: "ألفا روميو", id: 6 },
      icon: <SiAlfaromeo />,
    },
    { name: { en: "Audi", er: "أودي", id: 7 }, icon: <SiAudi /> },
    { name: { en: "Austin", er: "أوستن", id: 8 }, icon: <GiCartwheel /> },
    { name: { en: "BAIC	", er: "بايك", id: 9 }, icon: <GiCartwheel /> },
    { name: { en: "Bentley", er: "بنتلي", id: 10 }, icon: <SiBentley /> },
    { name: { en: "BMW", er: "بي إم دبليو", id: 11 }, icon: <SiBmw /> },
    { name: { en: "Buggati", er: "بوجاتي", id: 12 }, icon: <SiBugatti /> },
    { name: { en: "Buick", er: "بويك", id: 13 }, icon: <SiVolvo /> },
    { name: { en: "BYD", er: "بي واي دي", id: 14 }, icon: <GiCartwheel /> },
    { name: { en: "Cadillac", er: "كاديلاك", id: 15 }, icon: <SiCadillac /> },
    { name: { en: "Changan", er: "شانجان", id: 16 }, icon: <GiCartwheel /> },
    { name: { en: "Chery", er: "شيري", id: 17 }, icon: <GiCartwheel /> },
    {
      name: { en: "Chevrolet", er: "شيفروليه", id: 18 },
      icon: <SiChevrolet />,
    },
    { name: { en: "Chrysler", er: "كرايسلر", id: 19 }, icon: <SiChrysler /> },
    { name: { en: "Daehan", er: "ديهان", id: 22 }, icon: <GiCartwheel /> },
    { name: { en: "Daewoo", er: "دايو", id: 23 }, icon: <GiCartwheel /> },
    { name: { en: "Daimler", er: "دايملر", id: 24 }, icon: <SiDaimler /> },
    { name: { en: "Datsun", er: "داتسون", id: 25 }, icon: <GiCartwheel /> },
    { name: { en: "Deepal", er: "ديبال", id: 26 }, icon: <GiCartwheel /> },
    {
      name: { en: "DFSK", er: "دي إف إس كيه", id: 27 },
      icon: <GiCartwheel />,
    },
    { name: { en: "Dodge", er: "دودج", id: 28 }, icon: <GiCartwheel /> },
    {
      name: { en: "Dongfeng", er: "دونغفنغ", id: 29 },
      icon: <GiCartwheel />,
    },
    { name: { en: "FAW", er: "فاو", id: 30 }, icon: <GiCartwheel /> },
    { name: { en: "Ferrari", er: "فيراري", id: 31 }, icon: <SiFerrari /> },
    { name: { en: "Fiat	", er: "فيات", id: 32 }, icon: <SiFiat /> },
    { name: { en: "Ford	", er: "فورد", id: 33 }, icon: <SiFord /> },
    { name: { en: "GAC", er: "جي إيه سي", id: 34 }, icon: <GiCartwheel /> },
    { name: { en: "Geely", er: "جيلي", id: 35 }, icon: <GiCartwheel /> },
    { name: { en: "Genesis", er: "جينيسيس", id: 36 }, icon: <GiCartwheel /> },
    { name: { en: "GMC", er: "جي إم سي", id: 37 }, icon: <GiCartwheel /> },
    {
      name: { en: "Golden Dragon", er: "جولدن دراغون", id: 38 },
      icon: <GiCartwheel />,
    },
    { name: { en: "Golf", er: "غولف", id: 39 }, icon: <GiCartwheel /> },
    { name: { en: "GUGO", er: "غوغو", id: 40 }, icon: <GiCartwheel /> },
    { name: { en: "Haval", er: "هافال", id: 41 }, icon: <GiCartwheel /> },
    { name: { en: "Hillman", er: "هيلمان", id: 42 }, icon: <GiCartwheel /> },
    { name: { en: "Hino", er: "هينو", id: 43 }, icon: <GiCartwheel /> },
    { name: { en: "Honri", er: "هنري", id: 44 }, icon: <GiCartwheel /> },
    { name: { en: "Hummer", er: "همر", id: 45 }, icon: <GiCartwheel /> },
    { name: { en: "Hyundai", er: "هيونداي", id: 46 }, icon: <SiHyundai /> },
    { name: { en: "Isuzu", er: "إيسوزو", id: 47 }, icon: <GiCartwheel /> },
    { name: { en: "JAC", er: "جاك", id: 48 }, icon: <GiCartwheel /> },
    { name: { en: "Jaguar", er: "جاكوار", id: 49 }, icon: <SiJaguar /> },
    { name: { en: "Jaxeri", er: "جاكسي", id: 50 }, icon: <GiCartwheel /> },
    { name: { en: "Jeep", er: "جيب", id: 51 }, icon: <SiJeep /> },
    { name: { en: "Jinbei", er: "جينبي", id: 52 }, icon: <GiCartwheel /> },
    { name: { en: "JMC", er: "جي إم سي", id: 53 }, icon: <GiCartwheel /> },
    {
      name: { en: "JW Forland", er: "جي دبليو فورلاند", id: 54 },
      icon: <GiCartwheel />,
    },
    {
      name: { en: "Kaiser Jeep", er: "كايزر جيب", id: 55 },
      icon: <SiJeep />,
    },
    { name: { en: "KIA", er: "كيا", id: 56 }, icon: <SiKia /> },
    { name: { en: "Lada", er: "لادا", id: 57 }, icon: <SiLada /> },
    {
      name: { en: "Lamborghini", er: "لامبورغيني", id: 58 },
      icon: <SiLamborghini />,
    },
    {
      name: { en: "Land Rover", er: "لاند روفر", id: 59 },
      icon: <SiLandrover />,
    },
    { name: { en: "Lexus", er: "لكزس", id: 60 }, icon: <GiCartwheel /> },
    { name: { en: "Lifan", er: "ليفان", id: 61 }, icon: <GiCartwheel /> },
    {
      name: { en: "Maserati", er: "مازيراتي", id: 63 },
      icon: <SiMaserati />,
    },
    { name: { en: "Master", er: "ماستر", id: 64 }, icon: <GiCartwheel /> },
    { name: { en: "Mazda", er: "مازدا", id: 65 }, icon: <SiMazda /> },
    { name: { en: "McLaren", er: "ماكلارين", id: 66 }, icon: <SiMclaren /> },
    {
      name: { en: "Mercedes Benz", er: "مرسيدس بنز", id: 67 },
      icon: <SiMercedes />,
    },
    { name: { en: "MG", er: "إم جي", id: 68 }, icon: <SiMg /> },
    { name: { en: "MINI", er: "ميني", id: 69 }, icon: <SiMini /> },
    {
      name: { en: "Mitsubishi", er: "ميتسوبيشي", id: 70 },
      icon: <SiMitsubishi />,
    },
    { name: { en: "Morris", er: "موريس", id: 71 }, icon: <GiCartwheel /> },
    { name: { en: "Mushtaq", er: "مشتاق", id: 73 }, icon: <GiCartwheel /> },
    { name: { en: "Nissan", er: "نيسان", id: 74 }, icon: <SiNissan /> },
    {
      name: { en: "Oldsmobile", er: "أولدموبيل", id: 75 },
      icon: <GiCartwheel />,
    },
    { name: { en: "Opel", er: "أوبل", id: 76 }, icon: <SiOpel /> },
    { name: { en: "ORA", er: "أورا", id: 77 }, icon: <GiCartwheel /> },
    { name: { en: "Peugeot", er: "بيجو", id: 78 }, icon: <SiPeugeot /> },
    { name: { en: "Plymouth", er: "بليموث", id: 79 }, icon: <GiCartwheel /> },
    { name: { en: "Polaris", er: "بولاريس", id: 80 }, icon: <GiCartwheel /> },
    { name: { en: "Pontiac", er: "بونتياك", id: 81 }, icon: <GiCartwheel /> },
    { name: { en: "Porsche", er: "بورش", id: 82 }, icon: <SiPorsche /> },
    { name: { en: "Power", er: "باور", id: 83 }, icon: <GiCartwheel /> },
    { name: { en: "Prince", er: "برنس", id: 84 }, icon: <GiCartwheel /> },
    { name: { en: "Proton", er: "بروتون", id: 85 }, icon: <GiCartwheel /> },
    {
      name: { en: "Range Rover", er: "رينج روفر", id: 86 },
      icon: <GiCartwheel />,
    },
    { name: { en: "Renault", er: "رينو", id: 87 }, icon: <SiRenault /> },
    { name: { en: "Rinco", er: "رينكو", id: 88 }, icon: <GiCartwheel /> },
    {
      name: { en: "Rolls Royce", er: "رولز رويس", id: 89 },
      icon: <SiRollsroyce />,
    },
    { name: { en: "Roma", er: "روما", id: 90 }, icon: <GiCartwheel /> },
    { name: { en: "Rover", er: "روفر", id: 91 }, icon: <GiCartwheel /> },
    { name: { en: "Scion", er: "سيون", id: 94 }, icon: <GiCartwheel /> },
    { name: { en: "Seres", er: "سيريس", id: 95 }, icon: <GiCartwheel /> },
    { name: { en: "Skoda", er: "سكودا", id: 96 }, icon: <SiSkoda /> },
    { name: { en: "Smart", er: "سمارت", id: 97 }, icon: <SiSmart /> },
    { name: { en: "Sogo", er: "سوغو", id: 98 }, icon: <GiCartwheel /> },
    { name: { en: "Sokon", er: "سوكو", id: 99 }, icon: <GiCartwheel /> },
    {
      name: { en: "SsangYong", er: "سانغ يونغ", id: 100 },
      icon: <GiCartwheel />,
    },
    { name: { en: "Subaru", er: "سوبارو", id: 101 }, icon: <SiSubaru /> },
    { name: { en: "Tank", er: "تانك", id: 102 }, icon: <GiCartwheel /> },
    { name: { en: "Tesla", er: "تسلا", id: 103 }, icon: <SiTesla /> },
    { name: { en: "Volvo", er: "فولفو", id: 107 }, icon: <SiVolvo /> },
    {
      name: { en: "Volkswagen", er: "فولكس فاجن", id: 109 },
      icon: <SiVolkswagen />,
    },
    { name: { en: "Triumph", er: "تريومف", id: 110 }, icon: <GiCartwheel /> },
    { name: { en: "United", er: "يونايتد", id: 111 }, icon: <GiCartwheel /> },
    { name: { en: "Xiaomi", er: "شاومي", id: 112 }, icon: <SiXiaomi /> },
    { name: { en: "ZOTYE", er: "زوتي", id: 113 }, icon: <GiCartwheel /> },
    { name: { en: "Willys", er: "ويلليس", id: 118 }, icon: <GiCartwheel /> },
  ],
};
/* Here is Makes < */
/* Here is Model > */
const modelMap = {
  1: {
    popular: [
      { en: "Corolla", ar: "كورولا", id: 1 },
      { en: "Yaris", ar: "ياريس", id: 2 },
      { en: "Aqua", ar: "أكوا", id: 3 },
      { en: "Fortuner", ar: "فورتشنر", id: 4 },
      { en: "Prius", ar: "بريوس", id: 5 },
    ],
    others: [
      { en: "4 Runner", ar: "4 رانر", id: 6 },
      { en: "86", ar: "86", id: 7 },
      { en: "Allex", ar: "أليكس", id: 8 },
      { en: "Allion", ar: "أليون", id: 9 },
      { en: "Alphard", ar: "ألفارد", id: 10 },
      { en: "Alphard V", ar: "ألفارد في", id: 11 },
      { en: "Aristo", ar: "أريستو", id: 12 },
      { en: "Auris", ar: "أوريس", id: 13 },
      { en: "Avalon", ar: "أفالون", id: 14 },
      { en: "Avanza", ar: "أفانزا", id: 15 },
      { en: "Avensis", ar: "أفنسيس", id: 16 },
      { en: "Aygo", ar: "آيغو", id: 17 },
      { en: "Belta", ar: "بلتا", id: 18 },
      { en: "Brevis", ar: "بريفس", id: 19 },
      { en: "bZ4X", ar: "بي زد 4 إكس", id: 20 },
      { en: "C-HR", ar: "سي-اتش آر", id: 21 },
      { en: "Cami", ar: "كامي", id: 22 },
      { en: "Camry", ar: "كامري", id: 23 },
      { en: "Carina", ar: "كارينا", id: 24 },
      { en: "Celica", ar: "سيليكا", id: 25 },
      { en: "Celsior", ar: "سيلسور", id: 26 },
      { en: "Century", ar: "سينتشوري", id: 27 },
      { en: "Chaser", ar: "تشيزر", id: 28 },
      { en: "Coaster", ar: "كوستر", id: 29 },
      { en: "Corolla Axio", ar: "كورولا أكسيو", id: 30 },
      { en: "Corolla Cross", ar: "كورولا كروس", id: 31 },
      { en: "Corolla Fielder", ar: "كورولا فيلدر", id: 32 },
      { en: "Corolla Hatchback", ar: "كورولا هاتشباك", id: 33 },
      { en: "Corolla Touring", ar: "كورولا تورينغ", id: 34 },
      { en: "Corona", ar: "كورونا", id: 35 },
      { en: "Cressida", ar: "كريسيدا", id: 36 },
      { en: "Cresta", ar: "كريستا", id: 37 },
      { en: "Crown", ar: "كراون", id: 38 },
      { en: "Duet", ar: "ديويت", id: 39 },
      { en: "Dyna", ar: "داينا", id: 40 },
      { en: "Esquire", ar: "إسكواير", id: 41 },
      { en: "Estima", ar: "إستيما", id: 42 },
      { en: "Fj Cruiser", ar: "إف جي كروزر", id: 43 },
      { en: "FunCargo", ar: "فان كارغو", id: 44 },
      { en: "Gaia", ar: "غايا", id: 45 },
      { en: "Harrier", ar: "هارير", id: 46 },
      { en: "Hiace", ar: "هايس", id: 47 },
      { en: "Highlander", ar: "هايلاندر", id: 48 },
      { en: "Hilux", ar: "هايلكس", id: 49 },
      { en: "Innova", ar: "إينوفا", id: 50 },
      { en: "iQ", ar: "آي كيو", id: 51 },
      { en: "ISIS", ar: "إيسيس", id: 52 },
      { en: "IST", ar: "آي إس تي", id: 53 },
      { en: "Kluger", ar: "كلوجر", id: 54 },
      { en: "Land Cruiser", ar: "لاند كروزر", id: 55 },
      { en: "Levin", ar: "ليفين", id: 56 },
      { en: "Lucida", ar: "لوسيدا", id: 57 },
      { en: "Mark II", ar: "مارك الثاني", id: 58 },
      { en: "Mark X", ar: "مارك إكس", id: 59 },
      { en: "Matrix", ar: "ماتريكس", id: 60 },
      { en: "MR2", ar: "إم آر 2", id: 61 },
      { en: "Noah", ar: "نواه", id: 62 },
      { en: "Passo", ar: "باسو", id: 63 },
      { en: "Pixis Epoch", ar: "بيكسيس إبوك", id: 64 },
      { en: "Pixis Space", ar: "بيكسيس سبيس", id: 65 },
      { en: "Platz", ar: "بلاتز", id: 66 },
      { en: "Porte", ar: "بورت", id: 67 },
      { en: "Prado", ar: "برادو", id: 68 },
      { en: "Premio", ar: "بريمو", id: 69 },
      { en: "Previa", ar: "بريفيا", id: 70 },
      { en: "Prius Alpha", ar: "بريوس ألفا", id: 71 },
      { en: "Probox", ar: "بروبوكس", id: 72 },
      { en: "Ractis", ar: "راكتيز", id: 73 },
      { en: "Raize", ar: "رايز", id: 74 },
      { en: "Raum", ar: "راوم", id: 75 },
      { en: "Rav4", ar: "راف 4", id: 76 },
      { en: "Roomy", ar: "رومي", id: 77 },
      { en: "Rumion", ar: "روميون", id: 78 },
      { en: "Rush", ar: "راش", id: 79 },
      { en: "Sai", ar: "ساي", id: 80 },
      { en: "Sequoia", ar: "سيكويا", id: 81 },
      { en: "Sera", ar: "سيرا", id: 82 },
      { en: "Sienta", ar: "سينتا", id: 83 },
      { en: "Soarer", ar: "سوارر", id: 84 },
      { en: "Sprinter", ar: "سبرنتر", id: 85 },
      { en: "Starlet", ar: "ستارلت", id: 86 },
      { en: "Succeed", ar: "سكسيد", id: 87 },
      { en: "Supra", ar: "سوبرا", id: 88 },
      { en: "Surf", ar: "سورف", id: 89 },
      { en: "Tacoma", ar: "تاكوما", id: 90 },
      { en: "Tank", ar: "تانك", id: 91 },
      { en: "Tercel", ar: "تيرسل", id: 92 },
      { en: "Town Ace", ar: "تاون إيس", id: 93 },
      { en: "Tundra", ar: "توندرا", id: 94 },
      { en: "Urban Cruiser", ar: "أوربان كروزر", id: 95 },
      { en: "Vellfire", ar: "فيلفاير", id: 96 },
      { en: "Verossa", ar: "فيروسا", id: 97 },
      { en: "Vios", ar: "فياس", id: 98 },
      { en: "Vitz", ar: "فيتز", id: 99 },
      { en: "Voxy", ar: "فوكسي", id: 100 },
      { en: "Wish", ar: "ويش", id: 101 },
      { en: "Yaris Cross", ar: "ياريس كروس", id: 102 },
      { en: "Yaris Hatchback", ar: "ياريس هاتشباك", id: 103 },
      { en: "Alphard G", ar: "ألفارد جي", id: 723 },
      { en: "Alphard Hybrid", ar: "ألفارد هايبرد", id: 724 },
      { en: "Altezza", ar: "ألتيزا", id: 725 },
      { en: "B B", ar: "بي بي", id: 726 },
      { en: "Biyana", ar: "بيانا	", id: 727 },
      { en: "Caldina", ar: "كالدينا", id: 728 },
      { en: "Corolla Assita", ar: "كورولا أسيستا", id: 729 },
      { en: "Corolla Cross HEV", ar: "كورولا كروس HEV", id: 730 },
      { en: "Corolla Hybrid", ar: "كورولا هايبرد", id: 731 },
      // { en: "Cresta", ar: "كريستا", id: 732 },
      { en: "Cynos", ar: "سينوس", id: 733 },
      { en: "Echo", ar: "إيكو", id: 734 },
      { en: "Ecotec", ar: "إيكوتك", id: 735 },
      { en: "Lite Ace", ar: "لايت إيس", id: 736 },
      { en: "PickUp", ar: "بيك أب", id: 737 },
      { en: "Pixis Van", ar: "بيكسيس فان", id: 738 },
      { en: "Runx", ar: "رانكس", id: 739 },
      { en: "Toyo Ace", ar: "توي أيس", id: 740 },
      { en: "Van", ar: "فان", id: 741 },
      { en: "Vanguard", ar: "فانغارد", id: 742 },
    ],
  },
  2: {
    popular: [
      { en: "Alto", ar: "ألتو", id: 104 },
      { en: "Cultus", ar: "كالطوس", id: 105 },
      { en: "Wagon R", ar: "واجن آر", id: 106 },
      { en: "Swift", ar: "سويفت", id: 107 },
    ],
    others: [
      { en: "Alto Lapin", ar: "ألتو لابين", id: 108 },
      { en: "APV", ar: "إيه بي في", id: 109 },
      { en: "Baleno", ar: "بالينو", id: 110 },
      { en: "Bolan", ar: "بولان", id: 111 },
      { en: "Cappuccino", ar: "كابوتشينو", id: 112 },
      { en: "Carry", ar: "كاري", id: 113 },
      { en: "Celerio", ar: "سيليريو", id: 114 },
      { en: "Cervo", ar: "سيرفو", id: 115 },
      { en: "Ciaz", ar: "سياز", id: 116 },
      { en: "Ertiga", ar: "أرتيجا", id: 117 },
      { en: "Every", ar: "إيفري", id: 118 },
      { en: "Every Wagon", ar: "إيفري واغن", id: 119 },
      { en: "FX", ar: "إف إكس", id: 120 },
      { en: "Hustler", ar: "هستّلار", id: 121 },
      { en: "Ignis", ar: "إغنيس", id: 122 },
      { en: "Jimny", ar: "جمني", id: 123 },
      { en: "Kei", ar: "كي", id: 124 },
      { en: "Khyber", ar: "خيبر", id: 125 },
      { en: "Kizashi", ar: "كيزاشي", id: 126 },
      { en: "Landy", ar: "لاندي", id: 127 },
      { en: "Liana", ar: "ليانا", id: 128 },
      { en: "Margalla", ar: "مارغالا", id: 129 },
      { en: "Mega Carry Xtra", ar: "ميغا كاري إكسترا", id: 130 },
      { en: "Mehran", ar: "مهران", id: 131 },
      { en: "MR Wagon", ar: "إم آر واغن", id: 132 },
      { en: "Palette", ar: "باليت", id: 133 },
      { en: "Potohar", ar: "بوتوهار", id: 134 },
      { en: "Ravi", ar: "رافي", id: 135 },
      { en: "S Cross", ar: "إس كروس", id: 136 },
      { en: "Samurai", ar: "ساموراي", id: 137 },
      { en: "Solio", ar: "سوليو", id: 138 },
      { en: "Spacia", ar: "سباسيا", id: 139 },
      { en: "Splash", ar: "سبلاش", id: 140 },
      { en: "Sx4", ar: "إس إكس 4", id: 141 },
      { en: "Twin", ar: "توين", id: 142 },
      { en: "Vitara", ar: "فيتارا", id: 143 },
      { en: "Xbee", ar: "إكس بي", id: 144 },
      { en: "Aerio", ar: "أريو", id: 743 },
      { en: "Escudo", ar: "إسكودو", id: 744 },
      { en: "Gn250", ar: "جي إن 250", id: 745 },
      { en: "Lj80", ar: "إل جي 80", id: 746 },
      { en: "Palette Sw", ar: "باليه س دبليو", id: 747 },
      { en: "Scrum", ar: "سكرم", id: 748 },
      { en: "Sj410", ar: "إس جاي 410", id: 749 },
      { en: "Solio Bandit", ar: "سوليو بانديت", id: 750 },
      { en: "XL7", ar: "إكس إل 7", id: 751 },
      { en: "Jimny Sierra", ar: "جيمني سييرا", id: 1370 },
    ],
  },
  3: {
    popular: [
      { en: "City", ar: "سيتي", id: 145 },
      { en: "Civic", ar: "سيفيك", id: 146 },
      { en: "Vezel", ar: "فيزل", id: 147 },
      { en: "N Wgn", ar: "إن دبليو جن", id: 148 },
      { en: "Accord", ar: "أكور", id: 149 },
    ],
    others: [
      { en: "Acty", ar: "أكتي", id: 150 },
      { en: "Airwave", ar: "آيرويف", id: 151 },
      { en: "Beat", ar: "بيات", id: 152 },
      { en: "BR-V", ar: "بي آر في", id: 153 },
      { en: "Brio", ar: "بريو", id: 154 },
      { en: "Clarity", ar: "كلاريتي", id: 155 },
      { en: "CR X", ar: "سي آر إكس", id: 156 },
      { en: "CR-V", ar: "سي آر في", id: 157 },
      { en: "CR-Z Sports Hybrid", ar: "سي آر زد سبورتس هايبرد", id: 158 },
      { en: "Cross Road", ar: "كروس رود", id: 159 },
      { en: "Element", ar: "إيليسيون", id: 160 },
      { en: "Elysion", ar: "إيليسيون", id: 161 },
      { en: "Fit", ar: "فيت", id: 162 },
      { en: "Fit Aria", ar: "فيت أريا", id: 163 },
      { en: "Freed", ar: "فريد", id: 164 },
      { en: "Grace Hybrid", ar: "غريس هايبرد", id: 165 },
      { en: "Horizon", ar: "هورايزون", id: 166 },
      { en: "HR-V", ar: "إتش آر في", id: 167 },
      { en: "Insight", ar: "إنسايت", id: 168 },
      { en: "Inspire", ar: "إنسباير", id: 169 },
      { en: "Integra", ar: "إنتيغرا", id: 170 },
      { en: "Jade", ar: "جيد", id: 171 },
      { en: "Jazz", ar: "جاز", id: 172 },
      { en: "Life", ar: "لايف", id: 173 },
      { en: "Mobilio", ar: "موبيليو", id: 174 },
      { en: "N Box", ar: "إن بوكس", id: 175 },
      { en: "N One", ar: "إن ون", id: 176 },
      { en: "N-Van", ar: "إن فيان", id: 177 },
      { en: "Odyssey", ar: "أوديسي", id: 178 },
      { en: "Passport", ar: "باسبورت", id: 179 },
      { en: "Prelude", ar: "بريلود", id: 180 },
      { en: "S2000", ar: "إس 2000", id: 181 },
      { en: "S660", ar: "إس 660", id: 182 },
      { en: "Spike", ar: "سبايك", id: 183 },
      { en: "Stream", ar: "ستريم", id: 184 },
      { en: "Thats", ar: "ذا تس", id: 185 },
      { en: "Today", ar: "توداي", id: 186 },
      { en: "Vamos", ar: "فاموس", id: 187 },
      { en: "Z", ar: "زد", id: 188 },
      { en: "Zest", ar: "زيست", id: 189 },
      { en: "Accord Tourer", ar: "أكورد تورر", id: 752 },
      { en: "Acura", ar: "أكورا", id: 753 },
      { en: "Concerto", ar: "كونشرتو", id: 754 },
      { en: "FR-V", ar: "إف آر في", id: 755 },
      { en: "Insight Exclusive", ar: "إنسايت إكسكلوسيف", id: 756 },
      { en: "Partner", ar: "بارتنر", id: 757 },
      { en: "Stepwagon", ar: "ستب واجن", id: 758 },
      { en: "Stepwagon Spada", ar: "ستب واجن سبادا", id: 759 },
      { en: "Ferio", ar: "فيريو	", id: 1371 },
      { en: "Vamos hobio", ar: "فاموس هوبو", id: 1372 },
    ],
  },
  4: {
    popular: [
      { en: "Cuore", ar: "كوير", id: 190 },
      { en: "Mira", ar: "ميرا", id: 191 },
      { en: "Move", ar: "موف", id: 192 },
      { en: "Hijet", ar: "هيجيت", id: 193 },
      { en: "Charade", ar: "شارد", id: 194 },
    ],
    others: [
      { en: "Atrai Wagon", ar: "أتراي واغن", id: 195 },
      { en: "Bezza", ar: "بيزا", id: 196 },
      { en: "Boon", ar: "بون", id: 197 },
      { en: "Cast", ar: "كاست", id: 198 },
      { en: "Coo", ar: "كو", id: 199 },
      { en: "Copen", ar: "كوبين", id: 200 },
      { en: "Esse", ar: "إسي", id: 201 },
      { en: "Gran Max", ar: "جران ماكس", id: 202 },
      { en: "Move Canbus", ar: "موف كانبوس", id: 203 },
      { en: "Move Conte", ar: "موف كونتي", id: 204 },
      { en: "Move Latte", ar: "موف لاتيه", id: 205 },
      { en: "Naked", ar: "ناكيد", id: 206 },
      { en: "Opti", ar: "أبتي", id: 207 },
      { en: "Rocky", ar: "روكي", id: 208 },
      { en: "Sirion", ar: "سيريون", id: 209 },
      { en: "Sonica", ar: "سونيكا", id: 210 },
      { en: "Storia", ar: "ستوريا", id: 211 },
      { en: "Taft", ar: "تافت", id: 212 },
      { en: "Tanto", ar: "تانتو", id: 213 },
      { en: "Terios", ar: "تيريوس", id: 214 },
      { en: "Terios Kid", ar: "تيريوس كيد", id: 215 },
      { en: "Thor", ar: "ثور", id: 216 },
      { en: "Wake", ar: "ويك", id: 217 },
      { en: "Xenia", ar: "كسيينا", id: 218 },
      { en: "YRV", ar: "يارف", id: 219 },
      { en: "Bego", ar: "بيجو", id: 760 },
      { en: "Charmant", ar: "شارمانت", id: 761 },
      { en: "Consorte", ar: "كونسورتي", id: 762 },
      { en: "MAX", ar: "ماكس", id: 763 },
      { en: "Mira Cocoa", ar: "ميرا كوكوا", id: 764 },
      { en: "Mira Gino", ar: "ميرا جينو", id: 765 },
      { en: "Feroza", ar: "فيروزا		", id: 1776 },
    ],
  },
  5: {
    popular: [
      { en: "Revo", ar: "ريفو", id: 220 },
      { en: "Boltoro", ar: "بولتورو", id: 766 },
      { en: "Zabardast", ar: "زبردست", id: 767 },
    ],
  },
  6: {
    popular: [
      { en: "Mito", ar: "ميتيو", id: 221 },
      { en: "Giulietta", ar: "جوليتا", id: 768 },
    ],
  },
  7: {
    popular: [
      { en: "A4", ar: "A4", id: 222 },
      { en: "A6", ar: "A6", id: 223 },
      { en: "A3", ar: "A3", id: 224 },
      { en: "A5", ar: "A5", id: 225 },
      { en: "A8", ar: "A8", id: 226 },
    ],
    others: [
      { en: "A1", ar: "A1", id: 227 },
      { en: "A7", ar: "A7", id: 228 },
      { en: "e-tron", ar: "e-tron", id: 229 },
      { en: "e-tron GT", ar: "e-tron GT", id: 230 },
      { en: "Q2", ar: "Q2", id: 231 },
      { en: "Q3", ar: "Q3", id: 232 },
      { en: "Q5", ar: "Q5", id: 233 },
      { en: "Q7", ar: "Q7", id: 234 },
      { en: "Q8", ar: "Q8", id: 235 },
      { en: "R8", ar: "R8", id: 236 },
      { en: "S5", ar: "S5", id: 237 },
      { en: "TT", ar: "TT", id: 238 },
    ],
  },
  8: {
    popular: [
      { en: "10", ar: "10", id: 769 },
      { en: "Fx4", ar: "Fx4", id: 770 },
      { en: "Maxi", ar: "ماكسي", id: 771 },
      { en: "Mini", ar: "ميني", id: 772 },
    ],
  },

  9: {
    popular: [
      { en: "BJ40", ar: "BJ40", id: 239 },
      { en: "BJ40 Plus", ar: "BJ40 Plus", id: 240 },
      { en: "Senova D20", ar: "Senova D20", id: 241 },
      { en: "Senova X25", ar: "Senova X25", id: 242 },
      { en: "M50", ar: "إم 50", id: 773 },
    ],
  },
  10: {
    popular: [
      { en: "Continental GT", ar: "Continental GT", id: 243 },
      { en: "Flying Spur", ar: "Flying Spur", id: 244 },
      { en: "Mulsanne", ar: "Mulsanne", id: 245 },
    ],
  },
  11: {
    popular: [
      { en: "3 Series", ar: "3 Series", id: 246 },
      { en: "7 Series", ar: "7 Series", id: 247 },
      { en: "5 Series", ar: "5 Series", id: 248 },
      { en: "X5 Series", ar: "X5 Series", id: 249 },
      { en: "X1", ar: "X1", id: 250 },
    ],

    others: [
      { en: "1 Series", ar: "1 Series", id: 251 },
      { en: "2 Series", ar: "2 Series", id: 252 },
      { en: "6 Series", ar: "6 Series", id: 253 },
      { en: "8 Series", ar: "8 Series", id: 254 },
      { en: "i3", ar: "i3", id: 255 },
      { en: "i4", ar: "i4", id: 256 },
      { en: "i5", ar: "i5", id: 257 },
      { en: "i8", ar: "i8", id: 258 },
      { en: "iX", ar: "iX", id: 259 },
      { en: "iX3", ar: "iX3", id: 260 },
      { en: "X2", ar: "X2", id: 261 },
      { en: "X3 Series", ar: "X3 Series", id: 262 },
      { en: "X4", ar: "X4", id: 263 },
      { en: "X6 Series", ar: "X6 Series", id: 264 },
      { en: "X7", ar: "X7", id: 265 },
      { en: "Z3", ar: "Z3", id: 266 },
      { en: "Z4", ar: "Z4", id: 267 },
      { en: "Z8", ar: "Z8", id: 268 },
      { en: "GT", ar: "جي تي", id: 774 },
      { en: "M Series", ar: "إم سيريس", id: 775 },
    ],
  },
  12: {
    popular: [
      { en: "Chiron", ar: "شيرون", id: 269 },
      { en: "Veyron", ar: "فيران", id: 270 },
    ],
  },
  13: {
    popular: [
      { en: "Century", ar: "قرن", id: 271 },
      { en: "Electra", ar: "إلكترى", id: 272 },
      { en: "Enclave", ar: "إنكليف", id: 273 },
      { en: "Encore", ar: "إنكور", id: 274 },
      { en: "Envision", ar: "إنفيجن", id: 275 },
      { en: "LaCrosse", ar: "لا كروس", id: 276 },
      { en: "Lesabre", ar: "ليسبري", id: 277 },
      { en: "Regal", ar: "ريجال", id: 278 },
      { en: "Riviera", ar: "ريفيرا", id: 279 },
      { en: "Roadmaster", ar: "رودماستر", id: 280 },
      { en: "Special", ar: "خاص", id: 776 },
    ],
  },
  14: {
    popular: [
      { en: "Atto 3", ar: "آتو 3", id: 777 },
      { en: "Dolphin", ar: "دولفين", id: 778 },
      { en: "Seal", ar: "سيل", id: 779 },
      { en: "Sealion 6", ar: "سيليون 6", id: 780 },
    ],
  },
  15: {
    popular: [
      { en: "CTS", ar: " سي تي إس", id: 281 },
      { en: "Escalade Ext", ar: "اسكاليد اكست", id: 781 },
      { en: "Fleetwood", ar: "فليتوود", id: 782 },
    ],
  },
  16: {
    popular: [
      { en: "Kalam", ar: "كلام", id: 282 },
      { en: "Alsvin", ar: "ألسفين", id: 283 },
      { en: "Gilgit", ar: "جلغيت", id: 284 },
    ],
    others: [
      { en: "A800", ar: "A800", id: 285 },
      { en: "CS35 Plus", ar: "CS35 Plus", id: 286 },
      { en: "CX70T", ar: "CX70T", id: 287 },
      { en: "Kaghan XL", ar: "كاغان XL", id: 288 },
      { en: "Kalash", ar: "كلاش", id: 289 },
      { en: "Karvaan", ar: "كارافان", id: 290 },
      { en: "M8", ar: "M8", id: 291 },
      { en: "M9", ar: "M9", id: 292 },
      { en: "Oshan X7", ar: "Oshan X7", id: 293 },
      { en: "Shahanshah", ar: "شاهنشاه", id: 294 },
      { en: "UNI-T", ar: "UNI-T", id: 295 },
      { en: "X5", ar: "X5", id: 296 },
      { en: "Chitral", ar: "تشترال", id: 783 },
      { en: "Uni-k", ar: "يوني-كاي", id: 1373 },
    ],
  },
  17: {
    popular: [
      { en: "QQ", ar: "كيو كيو", id: 297 },
      { en: "Tiggo 4 Pro", ar: "تيججو 4 برو", id: 298 },
      { en: "Tiggo 8 Pro", ar: "تيججو 8 برو", id: 299 },
      { en: "Jaecoo", ar: "جيكو", id: 784 },
      { en: "Omoda", ar: "أومودا", id: 785 },
      { en: "Tiggo 4", ar: "تيجو 4", id: 786 },
      { en: "Tiggo 8", ar: "تيجو 8", id: 787 },
    ],
  },
  18: {
    popular: [
      { en: "Joy", ar: "جوي", id: 301 },
      { en: "Optra", ar: "أوبترا", id: 302 },
      { en: "Exclusive", ar: "إكزكلوسيف", id: 303 },
      { en: "Spark", ar: "سبارك", id: 304 },
      { en: "Aveo", ar: "أفيو", id: 305 },
    ],
    others: [
      { en: "Camaro", ar: "كامارو", id: 307 },
      { en: "Caprice", ar: "كابريس", id: 308 },
      { en: "Colorado", ar: "كولورادو", id: 309 },
      { en: "Corvette", ar: "كورفيت", id: 310 },
      { en: "Cruze", ar: "كروز", id: 311 },
      { en: "Equinox", ar: "إيكوينوكس", id: 312 },
      { en: "Impala", ar: "امبالا", id: 313 },
      { en: "Lumina", ar: "لومينا", id: 314 },
      { en: "Malibu", ar: "ماليبو", id: 315 },
      { en: "Onix", ar: "أونيكس", id: 316 },
      { en: "Silverado", ar: "سيلفرادو", id: 317 },
      { en: "Sonic", ar: "سونيك", id: 318 },
      { en: "Suburban", ar: "سبربان", id: 319 },
      { en: "Tahoe", ar: "تاهو", id: 320 },
      { en: "Tavera", ar: "تافيرا", id: 321 },
      { en: "Trailblazer", ar: "ترايل بليزر", id: 322 },
      { en: "Traverse", ar: "ترافيرس", id: 323 },
      { en: "Bel Air", ar: "بيل اير", id: 788 },
      { en: "Biscayne", ar: "بيسكاين", id: 789 },
      { en: "Matiz", ar: "ماتيز", id: 790 },
      { en: "Nova", ar: "نوفا", id: 791 },
      { en: "Opala", ar: "أوبالا", id: 792 },
      { en: "Van", ar: "فان", id: 793 },
    ],
  },
  19: {
    popular: [
      { en: "300 C", ar: "300 سي", id: 324 },
      { en: "Pt Cruiser", ar: "بي تي كروزر", id: 325 },
      { en: "Plymouth Voyager", ar: "بليموث فوياجر", id: 794 },
    ],
  },
  22: {
    popular: [{ en: "Shehzore", ar: "شيه زوري", id: 326 }],
  },
  23: {
    popular: [
      { en: "Cielo", ar: "سييلو", id: 327 },
      { en: "Racer", ar: "رايسر", id: 328 },
      { en: "Matiz", ar: "ماتيز", id: 795 },
    ],
  },
  24: {
    popular: [{ en: "XJ6", ar: "إكس جي 6", id: 796 }],
  },

  25: {
    popular: [
      { en: "120 Y", ar: "120 واي", id: 329 },
      { en: "Coupe", ar: "كوبيه", id: 797 },
      { en: "1000", ar: "1000", id: 798 },
      { en: "1200", ar: "1200", id: 799 },
      { en: "510", ar: "510", id: 800 },
      { en: "Bluebird", ar: "بلو بيرد", id: 801 },
      { en: "Cherry", ar: "تشيري", id: 802 },
    ],
  },
  26: {
    popular: [
      { en: "L07", ar: "L07", id: 330 },
      { en: "S07", ar: "S07", id: 331 },
    ],
  },
  27: {
    popular: [
      { en: "C37", ar: "C37", id: 332 },
      { en: "Rustom", ar: "راستوم", id: 333 },
      { en: "Convoy", ar: "كونفوي", id: 334 },
      { en: "Shahbaz", ar: "شاهباز", id: 335 },
    ],
    others: [
      { en: "Glory 580", ar: "غلوري 580", id: 336 },
      { en: "Glory 500", ar: "غلوري 500", id: 803 },
      { en: "Seres 3", ar: "سيريس 3", id: 804 },
    ],
  },

  28: {
    popular: [
      { en: "Challenger", ar: "تشالنجر", id: 337 },
      { en: "Charger", ar: "تشارجر", id: 338 },
      { en: "Nitro", ar: "نيترو", id: 339 },
      { en: "Ram", ar: "رام", id: 340 },
      { en: "Viper", ar: "فايبر", id: 341 },
      { en: "Brothers", ar: "إخوان", id: 805 },
      { en: "Dart", ar: "دارت", id: 806 },
      { en: "Stealth", ar: "ستيلث", id: 807 },
    ],
  },
  29: {
    popular: [
      { en: "Guru", ar: "غورو", id: 808 },
      { en: "Shineray", ar: "شينيراي", id: 809 },
      { en: "Subuk Raftaar", ar: "سوبوك رافتار", id: 810 },
    ],
  },

  30: {
    popular: [
      { en: "V2", ar: "V2", id: 342 },
      { en: "X-PV", ar: "X-PV", id: 343 },
      { en: "Carrier", ar: "كارير", id: 344 },
      { en: "Sirius", ar: "سيريوس", id: 345 },
    ],
    others: [
      { en: "Senya R7", ar: "سينا R7", id: 346 },
      { en: "Vita", ar: "فيتا", id: 347 },
      { en: "Besturn", ar: "بيسترن", id: 811 },
      { en: "Hongqi", ar: "هونغ تشي", id: 812 },
      { en: "Jiaxing Mini MPVs", ar: "جياشينغ ميني إم بي في إس", id: 813 },
    ],
  },
  31: {
    popular: [{ en: "California", ar: "كاليفورنيا", id: 814 }],
  },
  32: {
    popular: [{ en: "Uno", ar: "أونو", id: 348 }],
    others: [
      { en: "Bravo", ar: "برافو", id: 349 },
      { en: "Punto EVO", ar: "بونتو EVO", id: 350 },
      { en: "124", ar: "124", id: 815 },
      { en: "1100", ar: "1100", id: 816 },
      { en: "126", ar: "126", id: 817 },
      { en: "Iveco", ar: "إيفيكو", id: 818 },
      { en: "Panda", ar: "باندا", id: 819 },
    ],
  },

  33: {
    popular: [
      { en: "Ranger", ar: "رينجر", id: 351 },
      { en: "Bronco", ar: "برونكو", id: 352 },
    ],
    others: [
      { en: "Crown Victoria", ar: "كراون فيكتوريا", id: 353 },
      { en: "Escort", ar: "إسكورت", id: 354 },
      { en: "Everest", ar: "إيفرست", id: 355 },
      { en: "F 150", ar: "F 150", id: 356 },
      { en: "F 150 Shelby", ar: "F 150 شيلبي", id: 357 },
      { en: "Fiesta", ar: "فييستا", id: 358 },
      { en: "Mustang", ar: "موستانج", id: 359 },
      { en: "Mustang Mach-E", ar: "موستانج ماك-إي", id: 360 },
      { en: "Transit", ar: "ترانزيت", id: 361 },
      { en: "Mutt M 825", ar: "مات م 825", id: 820 },
      { en: "Anglia", ar: "أنجليا", id: 821 },
      { en: "Cortina", ar: "كورتينا", id: 822 },
      { en: "Fairlane", ar: "فيرلين", id: 823 },
      { en: "Falcon", ar: "فالكون", id: 824 },
      { en: "Gpw", ar: "جي بي دبليو", id: 825 },
      { en: "Kuga", ar: "كوغا", id: 826 },
      { en: "Sierra", ar: "سييرا", id: 827 },
      { en: "Squire", ar: "سكوير", id: 828 },
      { en: "Zephyr", ar: "زفير", id: 829 },
    ],
  },

  34: {
    popular: [{ en: "GS3", ar: "GS3", id: 362 }],
  },
  35: { popular: [{ en: "CK", ar: "سي كي", id: 830 }] },
  36: {
    popular: [{ en: "GV60", ar: "GV60", id: 363 }],
  },
  37: {
    popular: [
      { en: "Hummer EV", ar: "هامر إي في", id: 364 },
      { en: "Sierra", ar: "سييرا", id: 365 },
    ],
  },
  38: {
    popular: [{ en: "Xml6532", ar: "اكس ام ال 6532", id: 831 }],
  },
  39: {
    popular: [{ en: "Convertible", ar: "قابلة للتحويل", id: 832 }],
  },

  40: {
    popular: [
      { en: "250", ar: "250", id: 366 },
      { en: "GIGI", ar: "جيجي", id: 367 },
      { en: "Maximus", ar: "ماكسيموس", id: 368 },
      { en: "Tourer", ar: "تورر", id: 369 },
      { en: "220", ar: "220", id: 833 },
    ],
  },

  41: {
    popular: [{ en: "H6", ar: "H6", id: 370 }],
    others: [{ en: "Jolion", ar: "جوليون", id: 371 }],
  },
  42: {
    popular: [{ en: "Avenger", ar: "أفينجر", id: 834 }],
  },

  43: {
    popular: [
      { en: "500 Series", ar: "500 سلسلة", id: 372 },
      { en: "300 Series", ar: "سلسلة 300", id: 835 },
      { en: "FG1J", ar: "اف جي 1 جي", id: 836 },
    ],
  },

  44: {
    popular: [{ en: "Ve", ar: "في", id: 373 }],
  },

  45: {
    popular: [
      { en: "H2", ar: "H2", id: 374 },
      { en: "H1", ar: "H1", id: 375 },
      { en: "H3", ar: "H3", id: 376 },
    ],
  },

  46: {
    popular: [
      { en: "Tucson", ar: "توسان", id: 377 },
      { en: "Grand Starex", ar: "جراند ستاريكس", id: 378 },
      { en: "Sonata", ar: "سوناتا", id: 379 },
      { en: "Elantra", ar: "إلنترا", id: 380 },
      { en: "Santro", ar: "سانترو", id: 381 },
      { en: "Terracan", ar: "تيركان", id: 382 },
    ],
    others: [
      { en: "Accent", ar: "أكسنت", id: 383 },
      { en: "Coupe", ar: "كوبيه", id: 384 },
      { en: "Excel", ar: "إكسل", id: 385 },
      { en: "H-100", ar: "H-100", id: 386 },
      { en: "H1", ar: "H1", id: 387 },
      { en: "i10", ar: "i10", id: 388 },
      { en: "Ioniq 5", ar: "أيونيك 5", id: 389 },
      { en: "Ioniq 6", ar: "أيونيك 6", id: 390 },
      { en: "Kona", ar: "كونا", id: 391 },
      { en: "Mighty", ar: "مايتي", id: 392 },
      { en: "Pony", ar: "بوني", id: 393 },
      { en: "Santa Fe", ar: "سانتا في", id: 394 },
      { en: "Shehzore", ar: "شاهزور", id: 395 },
      { en: "Staria", ar: "ستاريا", id: 396 },
      { en: "Tiburon", ar: "تيبورون", id: 397 },
      { en: "Grace", ar: "جريس", id: 837 },
    ],
  },

  47: {
    popular: [{ en: "D-Max", ar: "D-Max", id: 398 }],
    others: [
      { en: "NKR", ar: "NKR", id: 399 },
      { en: "Trooper", ar: "Trooper", id: 400 },
      { en: "Como", ar: "كومو", id: 838 },
      { en: "Rodeo", ar: "روديو", id: 839 },
    ],
  },

  48: {
    popular: [
      { en: "T6", ar: "T6", id: 401 },
      { en: "X200", ar: "X200", id: 402 },
    ],
  },

  49: {
    popular: [
      { en: "S Type", ar: "S Type", id: 403 },
      { en: "XF", ar: "XF", id: 404 },
    ],
    others: [
      { en: "XJ L", ar: "XJ L", id: 405 },
      { en: "Xjs", ar: "Xjs", id: 406 },
      { en: "Xj6", ar: "إكس جي 6", id: 840 },
    ],
  },

  50: {
    popular: [{ en: "NUR-E", ar: "NUR-E", id: 407 }],
  },
  51: {
    popular: [
      { en: "M 151", ar: "M 151", id: 408 },
      { en: "Wrangler", ar: "Wrangler", id: 409 },
      { en: "CJ 5", ar: "CJ 5", id: 410 },
    ],
    others: [
      { en: "Cherokee", ar: "Cherokee", id: 411 },
      { en: "Gladiator", ar: "Gladiator", id: 412 },
      { en: "CJ 7", ar: "سي جي 7", id: 841 },
      { en: "Bj212", ar: "بي جي 212", id: 842 },
      { en: "Cj 6", ar: "سي جي 6", id: 843 },
      { en: "Commander 5.7 V8 Hemi", ar: "كوماندر 5.7 في 8 هيمي", id: 844 },
      { en: "M 825", ar: "م 825", id: 845 },
      { en: "Oiiio", ar: "أوييو", id: 846 },
    ],
  },
  52: {
    popular: [
      { en: "X30", ar: "X30", id: 413 },
      { en: "X30L", ar: "X30L", id: 414 },
      { en: "H1", ar: "إتش 1", id: 847 },
      { en: "H2", ar: "إتش 2", id: 848 },
    ],
  },
  53: {
    popular: [
      { en: "New Boarding", ar: "ركوب جديد", id: 415 },
      { en: "Vigus", ar: "فيغوس", id: 416 },
    ],
  },

  54: {
    popular: [
      { en: "Bravo", ar: "برافو", id: 417 },
      { en: "Safari", ar: "سفاري", id: 418 },
      { en: "C-10", ar: "سي-10", id: 849 },
      { en: "C-19", ar: "سي-19", id: 850 },
      { en: "C-311", ar: "سي-311", id: 851 },
      { en: "C-314", ar: "سي-314", id: 852 },
      { en: "C-717", ar: "سي-717", id: 853 },
      { en: "C-X17", ar: "سي-إكس 17", id: 854 },
      { en: "T-5", ar: "تي-5", id: 855 },
      { en: "TM 2.0", ar: "تي إم 2.0", id: 856 },
    ],
  },
  55: {
    popular: [{ en: "M715", ar: "إم 715", id: 857 }],
  },

  56: {
    popular: [
      { en: "Sportage", ar: "سبورتاج", id: 419 },
      { en: "Picanto", ar: "بيكانتو", id: 420 },
      { en: "Spectra", ar: "سبيكترا", id: 421 },
      { en: "Pride", ar: "برايد", id: 422 },
      { en: "Sorento", ar: "سورينتو", id: 423 },
    ],
    others: [
      { en: "Cerato", ar: "سيراتو", id: 424 },
      { en: "Classic", ar: "كلاسيك", id: 425 },
      { en: "Frontier K2700", ar: "فرونتير K2700", id: 426 },
      { en: "Grand Carnival", ar: "جراند كارنيفال", id: 427 },
      { en: "K5", ar: "K5", id: 428 },
      { en: "Niro", ar: "نيرو", id: 429 },
      { en: "Rio", ar: "ريو", id: 430 },
      { en: "Shehzore K2700", ar: "شيه زوري K2700", id: 431 },
      { en: "Stinger", ar: "ستينجر", id: 432 },
      { en: "Stonic", ar: "ستونيك", id: 433 },
      { en: "Spectra Wing", ar: " جناح سبيكترا", id: 1774 },
    ],
  },
  57: {
    popular: [{ en: "Riva", ar: "ريفا", id: 858 }],
  },
  58: {
    popular: [
      { en: "Aventador", ar: "أفينتادور", id: 434 },
      { en: "Countach", ar: "كونتاش", id: 435 },
      { en: "Diablo", ar: "ديابلو", id: 436 },
      { en: "Espada", ar: "إسبادا", id: 437 },
      { en: "Gallardo", ar: "غالاردو", id: 438 },
      { en: "Huracan", ar: "هوركان", id: 439 },
      { en: "Islero", ar: "إيسليرو", id: 440 },
      { en: "Jalpa", ar: "جالبا", id: 441 },
      { en: "Jarama", ar: "جاراما", id: 442 },
      { en: "Miura", ar: "ميورا", id: 443 },
      { en: "Murcielago", ar: "مورسييلاغو", id: 444 },
      { en: "Sesto", ar: "سيستو", id: 445 },
      { en: "Silhouette", ar: "سيلويت", id: 446 },
      { en: "Urraco", ar: "أورّاكو", id: 447 },
      { en: "Urus", ar: "أوروس", id: 448 },
      { en: "Cabrera", ar: "كابرا", id: 859 },
      { en: "Estoque", ar: "استوك", id: 860 },
      { en: "Ferruccio", ar: "فيروتشو", id: 861 },
      { en: "GT", ar: "جي تي", id: 862 },
      { en: "Lm", ar: "ال ام", id: 863 },
    ],
  },

  59: {
    popular: [
      { en: "Defender", ar: "ديفندر", id: 449 },
      { en: "Freelander", ar: "فريلاندر", id: 450 },
    ],
    others: [
      { en: "Discovery", ar: "ديسكفري", id: 451 },
      { en: "Discovery 4", ar: "ديسكفري 4", id: 452 },
      { en: "Series I", ar: "السلسلة الاولى", id: 864 },
    ],
  },

  60: {
    popular: [
      { en: "CT200h", ar: "CT200h", id: 453 },
      { en: "RX Series", ar: "RX Series", id: 454 },
      { en: "LX Series", ar: "LX Series", id: 455 },
    ],
    others: [
      { en: "HS", ar: "HS", id: 456 },
      { en: "LFA", ar: "LFA", id: 457 },
      { en: "LS Series", ar: "LS Series", id: 458 },
      { en: "Nx", ar: "Nx", id: 459 },
      { en: "RZ", ar: "RZ", id: 460 },
      { en: "UX", ar: "UX", id: 461 },
      { en: "ES", ar: "إي اس", id: 865 },
      { en: "GS", ar: "جي اس", id: 866 },
      { en: "GX", ar: "جي اكس", id: 867 },
      { en: "IS", ar: "آي اس", id: 868 },
      { en: "SC", ar: "إس سي", id: 869 },
      { en: "SC Series", ar: "سلسلة إس سي", id: 870 },
    ],
  },
  61: {
    popular: [{ en: "520", ar: "520", id: 871 }],
  },
  63: {
    popular: [
      { en: "Ghibli", ar: "Ghibli", id: 462 },
      { en: "GranTurismo", ar: "GranTurismo", id: 463 },
      { en: "Levante", ar: "Levante", id: 464 },
      { en: "MC20", ar: "MC20", id: 465 },
      { en: "Quattroporte", ar: "Quattroporte", id: 466 },
    ],
  },
  64: {
    popular: [
      { en: "Foton", ar: "فوتون", id: 872 },
      { en: "Rocket", ar: "روكيت", id: 873 },
    ],
  },
  65: {
    popular: [
      { en: "Carol", ar: "كارول", id: 467 },
      { en: "Flair", ar: "فلاير", id: 468 },
      { en: "RX8", ar: "RX8", id: 469 },
    ],
    others: [
      { en: "626", ar: "626", id: 470 },
      { en: "Axela", ar: "أكسلا", id: 471 },
      { en: "Biante", ar: "بيانت", id: 472 },
      { en: "BT 50", ar: "BT 50", id: 473 },
      { en: "Cx3", ar: "CX3", id: 474 },
      { en: "Cx5", ar: "CX5", id: 475 },
      { en: "Cx7", ar: "CX7", id: 476 },
      { en: "Flair Crossover", ar: "فلاير كروس أوفر", id: 477 },
      { en: "MX 5", ar: "MX 5", id: 478 },
      { en: "Premacy", ar: "بريماسي", id: 479 },
      { en: "Rx7", ar: "RX7", id: 480 },
      { en: "Titan", ar: "تيتان", id: 481 },
      { en: "Verisa", ar: "فريسا", id: 482 },
      { en: "Scrum", ar: "سكرام", id: 874 },
      { en: "Carol Eco", ar: "كارول ايكو", id: 875 },
      { en: "1300", ar: "1300", id: 876 },
      { en: "323", ar: "323", id: 877 },
      { en: "808", ar: "808", id: 878 },
      { en: "929", ar: "929", id: 879 },
      { en: "Atenza Sedan", ar: "أتينزا سيدان", id: 880 },
      { en: "Atenza Sport", ar: "أتينزا سبورت", id: 881 },
      { en: "Atenza Wagon", ar: "أتينزا واجون", id: 882 },
      { en: "Axela Sport", ar: "أكسلا سبورت", id: 883 },
      { en: "Az 1", ar: "أز 1", id: 884 },
      { en: "Az Offroad", ar: "أز أوف رود", id: 885 },
      { en: "Azwagon", ar: "أز واجون", id: 886 },
      { en: "Azwagon Custom Style", ar: "أز واجون ستايل مخصص", id: 887 },
      { en: "B2200", ar: "بي2200", id: 888 },
      { en: "Bongo", ar: "بونغو", id: 889 },
      { en: "Demio", ar: "ديميو", id: 890 },
      { en: "E 2200", ar: "إي 2200", id: 891 },
      { en: "Familia Van", ar: "فاميليا فان", id: 892 },
      { en: "Flair Custom Style", ar: "فلاير ستايل مخصص", id: 893 },
      { en: "Flair Wagon", ar: "فلاير واجون", id: 894 },
      { en: "Luce", ar: "لوس", id: 895 },
      { en: "MPV", ar: "إم بي في", id: 896 },
      { en: "Roadster", ar: "رودستر", id: 897 },
      { en: "Rx 2", ar: "آر إكس 2", id: 898 },
      { en: "Rx9", ar: "آر إكس 9", id: 899 },
      { en: "Scrum Wagon", ar: "سكرام واجون", id: 900 },
      { en: "Speed Axela", ar: "سبيد أكسيلا", id: 901 },
    ],
  },

  66: {
    popular: [{ en: "650S", ar: "650S", id: 483 }],
  },
  67: {
    popular: [
      { en: "C Class", ar: "فئة C", id: 484 },
      { en: "E Class", ar: "فئة E", id: 485 },
      { en: "S Class", ar: "فئة S", id: 486 },
    ],
    others: [
      { en: "A Class", ar: "فئة A", id: 487 },
      { en: "B Class", ar: "فئة B", id: 488 },
      { en: "CL Class", ar: "فئة CL", id: 489 },
      { en: "CLA Class", ar: "فئة CLA", id: 490 },
      { en: "CLK Class", ar: "فئة CLK", id: 491 },
      { en: "CLS Class", ar: "فئة CLS", id: 492 },
      { en: "EQB", ar: "EQB", id: 493 },
      { en: "EQC", ar: "EQC", id: 494 },
      { en: "EQE", ar: "EQE", id: 495 },
      { en: "EQS", ar: "EQS", id: 496 },
      { en: "G Class", ar: "فئة G", id: 497 },
      { en: "GLA Class", ar: "فئة GLA", id: 498 },
      { en: "GLB Class", ar: "فئة GLB", id: 499 },
      { en: "GLK Class", ar: "فئة GLK", id: 500 },
      { en: "GLS Class", ar: "فئة GLS", id: 501 },
      { en: "M Class", ar: "فئة M", id: 502 },
      { en: "Ponton", ar: "فئة بونتون", id: 503 },
      { en: "R Class", ar: "فئة R", id: 504 },
      { en: "SL Class", ar: "فئة SL", id: 505 },
      { en: "SLK Class", ar: "فئة SLK", id: 506 },
      { en: "SLS Class", ar: "فئة SLS", id: 507 },
      { en: "Sprinter", ar: "Sprinter", id: 508 },
      { en: "Vito", ar: "Vito", id: 509 },
      { en: "Smart", ar: "سمارت", id: 903 },
      { en: "200 D", ar: "200 دي", id: 904 },
      { en: "200 T", ar: "200 تي", id: 905 },
      { en: "240 Gd", ar: "240 جي دي", id: 906 },
      { en: "250 D", ar: "250 دي", id: 907 },
      { en: "Brabus", ar: "برابوس", id: 908 },
      { en: "C Class Coupe", ar: "فئة سي كوبيه", id: 909 },
      { en: "C Class Estate", ar: "فئة سي استيت", id: 910 },
      { en: "D Series", ar: "سلسلة دي", id: 911 },
      { en: "E Class Cabriolet", ar: "فئة إي كابريوليه", id: 912 },
      { en: "E Class Coupe", ar: "فئة إي كوبيه", id: 913 },
      { en: "E Class Estate", ar: "فئة إي استيت", id: 914 },
      { en: "Gl Class", ar: "فئة جي إل", id: 915 },
      { en: "Maybach", ar: "مايباخ", id: 916 },
      { en: "Mb140", ar: "ام بي 140", id: 917 },
      { en: "Se 220", ar: "إس إي 220", id: 918 },
      { en: "Smart Forfour", ar: "سمارت فور فور", id: 919 },
      { en: "Smart Fortwo", ar: "سمارت فور تو", id: 920 },
      { en: "Unimog", ar: "يوني موغ", id: 921 },
      { en: "Viano", ar: "فيانو", id: 922 },
      { en: "X", ar: "إكس", id: 923 },
      { en: "X Class", ar: "فئة إكس", id: 924 },
    ],
  },
  68: {
    popular: [
      { en: "MG 4", ar: "MG 4", id: 510 },
      { en: "MG 5", ar: "MG 5", id: 511 },
      { en: "MG 5 EV", ar: "MG 5 EV", id: 512 },
      { en: "MG EP", ar: "MG EP", id: 513 },
      { en: "MG Extender", ar: "MG Extender", id: 514 },
      { en: "MG Gloster", ar: "MG Gloster", id: 515 },
      { en: "MG HS", ar: "MG HS", id: 516 },
      { en: "MG RX8", ar: "MG RX8", id: 517 },
      { en: "MG ZS", ar: "MG ZS", id: 518 },
      { en: "MG ZS EV", ar: "MG ZS EV", id: 519 },
      { en: "3", ar: "3", id: 925 },
      { en: "6", ar: "6", id: 926 },
      { en: "GT", ar: "جي تي", id: 927 },
      { en: "MARVEL R", ar: "مارفيل آر", id: 928 },
      { en: "Midget", ar: "ميدجيت", id: 929 },
    ],
  },
  69: {
    popular: [{ en: "Cooper", ar: "كوبر", id: 520 }],
  },
  70: {
    popular: [
      { en: "Ek Wagon", ar: "إك واجن", id: 521 },
      { en: "Lancer", ar: "لانسر", id: 522 },
      { en: "Pajero", ar: "باجيرو", id: 523 },
      { en: "Pajero Mini", ar: "باجيرو ميني", id: 524 },
      { en: "Mirage", ar: "ميراج", id: 525 },
    ],
    others: [
      { en: "Challenger", ar: "تشالنجر", id: 526 },
      { en: "EK Custom", ar: "إك كستم", id: 527 },
      { en: "EK X", ar: "إك إكس", id: 528 },
      { en: "Fto", ar: "إف تي أو", id: 529 },
      { en: "FUSO", ar: "فوسو", id: 530 },
      { en: "Galant", ar: "جالانت", id: 531 },
      { en: "Grandis", ar: "جراندس", id: 532 },
      { en: "Gto", ar: "جتو", id: 533 },
      { en: "I", ar: "آي", id: 534 },
      { en: "L200", ar: "إل 200", id: 535 },
      { en: "L300", ar: "إل 300", id: 536 },
      { en: "Minica", ar: "مينيكا", id: 537 },
      { en: "Minicab", ar: "مينكاب", id: 538 },
      { en: "Outlander", ar: "أوتلاندر", id: 539 },
      { en: "Pajero Junior", ar: "باجيرو جونيور", id: 540 },
      { en: "Rvr", ar: "آر في آر", id: 541 },
      { en: "Toppo", ar: "توبو", id: 542 },
      { en: "Triton", ar: "تريتون", id: 543 },
      { en: "Carisma", ar: "كاريزما", id: 930 },
      { en: "Chariot", ar: "شاريوت", id: 931 },
      { en: "Delica", ar: "ديليكا", id: 932 },
      { en: "EK Space Custom", ar: "إي كي سبايس كاستم", id: 933 },
      { en: "Ek Sport", ar: "إي كي سبورت", id: 934 },
      { en: "Hiace", ar: "هايس", id: 935 },
      { en: "I Mivec", ar: "آي ميفيك", id: 936 },
      { en: "Lancer Evolution", ar: "لانسر إيفوليوشن", id: 937 },
      { en: "Shogun", ar: "شوجون", id: 938 },
      { en: "Town Box", ar: "تاون بوكس", id: 939 },
      { en: "Colt", ar: "كولت", id: 1777 },
    ],
  },
  71: {
    popular: [{ en: "Oxford", ar: "أكسفورد", id: 1301 }],
  },
  73: {
    popular: [
      { en: "KY10", ar: "كي واي 10", id: 544 },
      { en: "V5", ar: "في 5", id: 545 },
    ],
  },
  74: {
    popular: [
      { en: "Dayz", ar: "دايز", id: 546 },
      { en: "Clipper", ar: "كليبر", id: 547 },
      { en: "Sunny", ar: "صني", id: 548 },
      { en: "Juke", ar: "جوك", id: 549 },
    ],
    others: [
      { en: "350Z", ar: "350 زد", id: 550 },
      { en: "370Z", ar: "370 زد", id: 551 },
      { en: "AD Van", ar: "اي دي فان", id: 552 },
      { en: "Almera", ar: "الاميرا", id: 553 },
      { en: "Ariya", ar: "اريا", id: 554 },
      { en: "Blue Bird", ar: "بلو بيرد", id: 555 },
      { en: "Bluebird Sylphy", ar: "بلو بيرد سيلفي", id: 556 },
      { en: "Caravan", ar: "كارافان", id: 557 },
      { en: "Cedric", ar: "سيدريك", id: 558 },
      { en: "Cefiro", ar: "سيفيرو", id: 559 },
      { en: "Cima", ar: "سيما", id: 560 },
      { en: "Cube", ar: "كيوب", id: 561 },
      { en: "Elgrand", ar: "الجراند", id: 562 },
      { en: "Figaro", ar: "فيجارو", id: 563 },
      { en: "Fuga", ar: "فوجا", id: 564 },
      { en: "GT-R", ar: "جي تي ار", id: 565 },
      { en: "Infinity", ar: "انفينيتي", id: 566 },
      { en: "Kicks", ar: "كيكس", id: 567 },
      { en: "Kix", ar: "كيكس", id: 568 },
      { en: "Lafesta", ar: "لافستا", id: 569 },
      { en: "Leaf", ar: "ليف", id: 570 },
      { en: "March", ar: "مارش", id: 571 },
      { en: "Maxima", ar: "ماكسيما", id: 572 },
      { en: "Micra", ar: "ميكرا", id: 573 },
      { en: "Moco", ar: "موكو", id: 574 },
      { en: "Murano", ar: "مورانو", id: 575 },
      { en: "Navara", ar: "نافارا", id: 576 },
      { en: "Note", ar: "نوت", id: 577 },
      { en: "Nv350 Caravan", ar: "نف 350 كارافان", id: 578 },
      { en: "Otti", ar: "اوتي", id: 579 },
      { en: "Path Finder", ar: "باث فايندر", id: 580 },
      { en: "Patrol", ar: "دورية", id: 581 },
      { en: "Pino", ar: "بينو", id: 582 },
      { en: "Pixo", ar: "بيكسو", id: 583 },
      { en: "President", ar: "الرئيس", id: 584 },
      { en: "Primera", ar: "بريميرا", id: 585 },
      { en: "Pulsar", ar: "بولسار", id: 586 },
      { en: "Qashqai", ar: "كشكاي", id: 587 },
      { en: "Roox", ar: "روكس", id: 588 },
      { en: "Safari", ar: "سفاري", id: 589 },
      { en: "Sakura", ar: "ساكورا", id: 590 },
      { en: "Sentra", ar: "سنترا", id: 591 },
      { en: "Serena", ar: "سيرينا", id: 592 },
      { en: "Skyline", ar: "سكاي لاين", id: 593 },
      { en: "Sylphy", ar: "سيلفي", id: 594 },
      { en: "Terrano", ar: "تيرانو", id: 595 },
      { en: "Tiida", ar: "تيدا", id: 596 },
      { en: "Titan", ar: "تايتان", id: 597 },
      { en: "Wingroad", ar: "وينج رود", id: 598 },
      { en: "X Trail", ar: "اكس تريل", id: 599 },
      { en: "Dayz Highway Star", ar: "دايز هاي واي ستار", id: 1302 },
      { en: "120 Y", ar: "120 واي", id: 1303 },
      { en: "Dualis", ar: "دواليس", id: 1304 },
      { en: "Gloria", ar: "جلوريا", id: 1305 },
      { en: "Latio", ar: "لاتيو", id: 1306 },
      { en: "Liberty", ar: "ليبرتي", id: 1307 },
      { en: "Note Aura", ar: "نوت اورا", id: 1308 },
      { en: "Nv200 Vanette Wagon", ar: "انفي200 فانيت واجون", id: 1309 },
      { en: "Qashqai +2", ar: "كاشكاي +2", id: 1310 },
      { en: "Skyline Crossover", ar: "سكايلاين كروس اوفر", id: 1311 },
      { en: "Stagea", ar: "ستيجا", id: 1312 },
      { en: "Vanette", ar: "فانيت", id: 1313 },
      { en: "Z Series", ar: "ز سيريز", id: 1314 },
      { en: "Fairlady Z", ar: "فيرليدي زد", id: 1778 },
      { en:"Pickup",ar: "بيك أب", id: 1779 },
    ],
  },
  75: {
    popular: [
      { en: "442", ar: "442", id: 1315 },
      { en: "Delta", ar: "دلتا", id: 1316 },
      { en: "Ninety Eight", ar: "ناينتي إيت", id: 1317 },
    ],
  },
  76: {
    popular: [
      { en: "Corsa", ar: "كورسا", id: 600 },
      { en: "Kadet", ar: "كاديت", id: 1318 },
      { en: "Rekord", ar: "ريكورد", id: 1320 },
    ],
  },
  77: {
    popular: [
      { en: "03", ar: "03", id: 601 },
      { en: "07", ar: "07", id: 1321 },
    ],
  },
  78: {
    popular: [
      { en: "2008", ar: "٢٠٠٨", id: 602 },
      { en: "206", ar: "٢٠٦", id: 603 },
      { en: "309", ar: "٣٠٩", id: 604 },
      { en: "508", ar: "٥٠٨", id: 605 },
      { en: "E-2008", ar: "إي-٢٠٠٨", id: 606 },
      { en: "205", ar: "205", id: 1322 },
      { en: "3008", ar: "3008", id: 1323 },
      { en: "5008", ar: "5008", id: 1324 },
      { en: "Saga", ar: "ساغا", id: 1325 },
    ],
  },
  79: {
    popular: [
      { en: "Duster", ar: "دوستر", id: 1326 },
      { en: "Valiant", ar: "فالينت", id: 1328 },
    ],
  },

  80: {
    popular: [{ en: "RZR", ar: "ار زد ار", id: 1329 }],
  },

  81: {
    popular: [
      { en: "Bonneville", ar: "بونفيل", id: 607 },
      { en: "Cayenne", ar: "كايين", id: 608 },
      { en: "Panamera", ar: "باناميرا", id: 609 },
      { en: "Macan", ar: "ماكان", id: 610 },
    ],
    others: [
      { en: "911", ar: "911", id: 611 },
      { en: "Boxster", ar: "بوكستر", id: 612 },
      { en: "Cayman", ar: "كايمان", id: 613 },
      { en: "Taycan", ar: "تايكان", id: 614 },
      { en: "Le Mans", ar: "لو مانس", id: 1331 },
      { en: "Transam", ar: "ترانسام", id: 1332 },
    ],
  },

  82: {
    popular: [
      { en: "Catalina", ar: "كاتالينا", id: 1330 },
      { en: "Targa", ar: "تارغا", id: 1775 },
    ],
  },
  83: {
    popular: [{ en: "Mini Bus", ar: "ميني باص", id: 1334 }],
  },
  84: {
    popular: [{ en: "Pearl", ar: "لؤلؤة", id: 615 }],
    others: [
      { en: "K01", ar: "ك 01", id: 616 },
      { en: "K07", ar: "ك 07", id: 617 },
    ],
  },
  85: {
    popular: [{ en: "Saga", ar: "ساگا", id: 618 }],
    others: [
      { en: "Gen 2", ar: "جين 2", id: 619 },
      { en: "Impian", ar: "إمبيان", id: 620 },
      { en: "X50", ar: "إكس 50", id: 621 },
      { en: "X70", ar: "إكس 70", id: 622 },
    ],
  },
  86: {
    popular: [
      { en: "Sport", ar: "سبورت", id: 623 },
      { en: "Vogue", ar: "فوج", id: 624 },
    ],
    others: [
      { en: "Autobiography", ar: "سيرة ذاتية", id: 625 },
      { en: "Evoque", ar: "إيفوك", id: 626 },
      { en: "Velar", ar: "فيلار", id: 627 },
      { en: "Hse 4.6", ar: "اتش اس اي 4.6", id: 1335 },
      { en: "classic", ar: "كلاسيك", id: 1336 },
      { en: "se 4.0", ar: "اس اي 4.0", id: 1337 },
    ],
  },
  87: {
    popular: [{ en: "Duster", ar: "داستر", id: 628 }],
  },
  88: {
    popular: [{ en: "Aria", ar: "آريا", id: 629 }],
  },
  89: {
    popular: [
      { en: "Cullinan", ar: "كولينان", id: 630 },
      { en: "Dawn", ar: "داون", id: 631 },
      { en: "Ghost", ar: "جوست", id: 632 },
      { en: "Phantom", ar: "فانتوم", id: 633 },
      { en: "Spectre", ar: "سبيكتر", id: 634 },
      { en: "Wraith", ar: "رايث", id: 635 },
    ],
  },
  90: {
    popular: [
      { en: "Family Van", ar: "فان العائلة", id: 1338 },
      { en: "Family Van Deluxe", ar: "فان العائلة ديلوكس", id: 1339 },
      { en: "Mini Truck", ar: "ميني تراك", id: 1340 },
    ],
  },
  91: {
    popular: [{ en: "Metro", ar: "مترو", id: 1341 }],
  },
  94: {
    popular: [
      { en: "T C", ar: "تي سي", id: 1342 },
      { en: "X A", ar: "اكس اي", id: 1343 },
      { en: "X B", ar: "اكس بي", id: 1344 },
    ],
  },
  95: {
    popular: [{ en: "3", ar: "3", id: 636 }],
  },
  96: {
    popular: [
      { en: "Fabia", ar: "فابيا", id: 637 },
      { en: "Octavia", ar: "أوكتافيا", id: 638 },
      { en: "Superb", ar: "سوبرب", id: 639 },
    ],
  },
  97: {
    popular: [{ en: "Smart Fortwo", ar: "سمارت فورتو", id: 1345 }],
  },
  98: {
    popular: [
      { en: "Pickup", ar: "بيك اب", id: 640 },
      { en: "Double Cabin", ar: "دبل كابن", id: 1346 },
      { en: "Family Van", ar: "فان العائلة", id: 1347 },
    ],
  },
  99: {
    popular: [{ en: "Mpv", ar: "ام بي في", id: 1348 }],
  },
  100: {
    popular: [
      { en: "Chairman", ar: "تشيرمان", id: 641 },
      { en: "Korando", ar: "كوراندو", id: 642 },
      { en: "Rexton", ar: "ريكستون", id: 643 },
      { en: "Stavic", ar: "ستافيك", id: 644 },
    ],
    others: [{ en: "Musso updated", ar: "موسو", id: 1349 }],
  },
  101: {
    popular: [
      { en: "Pleo", ar: "بليو", id: 645 },
      { en: "Stella", ar: "ستيلا", id: 646 },
      { en: "Sambar", ar: "سامبار", id: 647 },
      { en: "R2", ar: "ر2", id: 648 },
      { en: "Impreza", ar: "امبريزا", id: 649 },
    ],
    others: [
      { en: "Brz", ar: "بريز", id: 650 },
      { en: "Chiffon Custom", ar: "شيفون كستم", id: 651 },
      { en: "Dex", ar: "ديكس", id: 652 },
      { en: "Dias Wagon", ar: "دياس واغون", id: 653 },
      { en: "Exiga", ar: "اكسيجا", id: 654 },
      { en: "Forester", ar: "فورستر", id: 655 },
      { en: "Justy", ar: "جوستي", id: 656 },
      { en: "Levorg", ar: "ليفورغ", id: 657 },
      { en: "Pleo Plus", ar: "بليو بلس", id: 658 },
      { en: "R1", ar: "ر1", id: 659 },
      { en: "Trezia", ar: "تريزيا", id: 660 },
      { en: "Xv", ar: "اكس في", id: 661 },
      { en: "Domingo", ar: "دومينجو", id: 1350 },
      { en: "Impreza G4", ar: "امبريزا جي4", id: 1351 },
      { en: "Impreza Sports", ar: "امبريزا سبورتس", id: 1352 },
      { en: "Impreza Xv", ar: "امبريزا اكس في", id: 1353 },
      { en: "Legacy B4", ar: "ليجاسي بي4", id: 1354 },
      { en: "Lucra", ar: "لوكرا", id: 1355 },
      { en: "Rex", ar: "ريكس", id: 1356 },
    ],
  },
  102: {
    popular: [{ en: "500", ar: "500", id: 662 }],
  },
  103: {
    popular: [
      { en: "Model 3", ar: "موديل 3", id: 663 },
      { en: "Model S", ar: "موديل S", id: 664 },
      { en: "Model X", ar: "موديل X", id: 665 },
      { en: "Model Y", ar: "موديل Y", id: 666 },
    ],
  },
  105: {
    popular: [
      { en: "Bravo", ar: "برافو", id: 667 },
      { en: "Alpha", ar: "ألفا", id: 668 },
    ],
  },
  107: {
    popular: [
      { en: "S40", ar: "أس 40", id: 677 },
      { en: "S90", ar: "أس 90", id: 678 },
      { en: "V40", ar: "في 40", id: 679 },
      { en: "XC60", ar: "إكس سي 60", id: 680 },
      { en: "XC90", ar: "إكس سي 90", id: 681 },
    ],
  },
  109: {
    popular: [
      { en: "Beetle", ar: "بيتل", id: 669 },
      { en: "Up", ar: "أب", id: 670 },
      { en: "Polo", ar: "بولو", id: 671 },
      { en: "Golf", ar: "غولف", id: 672 },
    ],
    others: [
      { en: "Amarok", ar: "أماروك", id: 673 },
      { en: "Passat", ar: "باسات", id: 674 },
      { en: "Touareg", ar: "تُواريج", id: 675 },
      { en: "Transporter T6", ar: "ترانسپورتر تي 6", id: 676 },
      { en: "411 Variant", ar: "411 فاريانت", id: 1359 },
      { en: "Camper", ar: "كامبر", id: 1360 },
      { en: "Double Cab Pickup", ar: "دبل كاب بيكاب", id: 1361 },
      {
        en: "Hardtop Deluxe Microbus",
        ar: "هاردتوب ديلوكس مايكروباص",
        id: 1362,
      },
      { en: "Kombi", ar: "كومبي", id: 1363 },
      { en: "Micro Bus", ar: "مايكرو باص", id: 1364 },
      { en: "Samba", ar: "سامبا", id: 1365 },
      { en: "Single Cab Pickup", ar: "سنجل كاب بيكاب", id: 1366 },
      { en: "Thing", ar: "ثينغ", id: 1367 },
    ],
  },

  110: {
    popular: [
      { en: "Herald", ar: "هيرالد", id: 1357 },
      { en: "Spitfire", ar: "سبتفاير", id: 1358 },
    ],
  },
  112: {
    popular: [{ en: "SU7", ar: "اس يو7", id: 1369 }],
  },
  113: {
    popular: [{ en: "Z100", ar: "زد 100", id: 682 }],
  },
  118: {
    popular: [{ en: "M38", ar: "ام38", id: 1368 }],
  },
};
/* Here is Model < */
// console.log(modelMap[make].popular,"here is data populated on base of make id");
const handleMake = (item) => {
  // setMakeDataValue(item.name);
  setMake(item.id); 
  // console.log(modelMap[make].popular,"here is data populated on base of make id");

};

const handleSelectChange = (event)=>{
  // console.log(event.target.value , "here is handle Values")
  setMake(event.target.value)
}
// const handleVersions = async (e) => {
//   const modelId = e.target.value;
//   console.log(modelId, "here is the selected model id");

//   // Update the carDataTable state with the selected model id
//   setCarDataTable((prevState) => ({
//     ...prevState,
//     model: {
//       id: Number(modelId) || 0, // Ensure the model id is a number and fallback to 0 if invalid
//     },
//   }));

//   try {
//     // Fetch car versions for the selected model
//     const response = await axios.get(`http://localhost:8080/carVersions/model/${modelId}`);
//     console.log(response.data, "here is data response");

//     // Set the car versions state with the fetched data
//     setCarVersion(response.data);
//   } catch (err) {
//     console.error("Error fetching car versions:", err);
//     alert("Error fetching car versions. Please try again.");
//   }
// };
const handleVersions = async (e) => {
  const modelId = e.target.value; // Get selected modelId from event
  console.log(modelId, "here is the selected model id");

  // Reset the carVersion state before making the API call to ensure it starts fresh
  setCarVersion([]);

  // Update the carDataTable state with the selected model id
  setCarDataTable((prevState) => ({
    ...prevState,
    model: {
      id: Number(modelId) || 0, // Ensure the model id is a valid number, fallback to 0 if invalid
    },
  }));

  if (!modelId) {
    // If no modelId is selected, exit early
    alert("Please select a valid model.");
    return;
  }

  try {
    const response = await axios.get(`http://192.168.18.60:8080/automotor/carVersions/model/${modelId}`);

    // Check if response data exists and is valid
    if (response?.data) {
      const data = typeof response.data === "string" ? JSON.parse(response.data) : response.data;

      console.log(data, "here is the data response");

      // Set carVersion state if data is valid, otherwise set to an empty array
      setCarVersion(Array.isArray(data) && data.length > 0 ? data : []);
    } else {
      // Handle cases where no data is returned
      setCarVersion([]);
      alert("No car versions found for the selected model.");
    }
  } catch (err) {
    console.error("Error fetching car versions", err);

    // Alert the user and reset the carVersion state in case of an error
    alert("Error fetching car versions. Please try again later.");
    setCarVersion([]);
  }
};



const handleSendAllData = async () => {
  const validateFields = () => {
  const {
    price,
    name,
    fuelType,
    model,
    vehicleType,
    wheelDriveType,
    year,
    dimension,
    engine,
    carVersionFeatures,
  } = carDataTable;

  if (!name) return "Car name is required";
  if (price === "" || price === 0) return "Price is required";
  if (!fuelType.id) return "Fuel Type is required";
  if (!model.id) return "Model is required";
  if (!vehicleType.id) return "Vehicle Type is required";
  if (!wheelDriveType.id) return "Wheel Drive Type is required";
  if (!year) return "Year is required";

  // Check for engine properties
  if (!engine.engineType) return "Engine type is required";
  if (!engine.displacement) return "Engine displacement is required";
  
  // Check for dimension fields
  if (!dimension.overallLength) return "Overall Length is required";
  if (!dimension.overallWidth) return "Overall Width is required";

  // Check if any car version feature is missing
  const incompleteFeature = carVersionFeatures.some(feature => feature.value === "");
  if (incompleteFeature) return "All car version features must be filled";

  // If all validations pass, return true
  return true;
};

// Perform validation before sending data
const validationResponse = validateFields();
if (validationResponse !== true) {
  // Show an alert or toast notification with validation error
  toast.error(validationResponse); // Or use alert(validationResponse)
  return; // Stop further execution if validation fails
}
  const data = new FormData();
  data.append("file", image);
  data.append("upload_preset", "cxbzsn0g");
  data.append("cloud_name", "dtlrs3y1y");
  data.append("folder", "automotorsversionimages"); 
  try {
setLoading(true)
    // console.log(carDataTable)
    // const response = await axios.post(`http://localhost:8080/carVersions/addcarversions`,carDataTable);
    // console.log(response.data, "here is data response");


    const res = await axios.post("https://api.cloudinary.com/v1_1/dtlrs3y1y/image/upload",data).then(async(res)=>{
      console.log(res)
      console.log({
        ...carDataTable,image:res.data.url,imagesrc_id:res.data.public_id
    },"data sending from ui")
      const ano = await axios.post("http://192.168.18.60:8080/automotor/carVersions/addcarversions",{
          ...carDataTable,image:res.data.url,imagesrc_id:res.data.public_id
      })
      console.log(ano,"here is all data with image")
      if (ano.data) {
        // Reset only the price field, preserve the rest of the state
        setCarDataTable((prevData) => ({
          ...prevData, // Keep other fields intact
          price: "",    // Reset price to 0
          dimension: {
            overallLength: null,
            overallWidth: null,
            overallHeight: null,
            wheelBase: null,
            groundClearance: null,
            kerbWeight: null,
            bootSpace: null,
          },
          engine: {
            engineType: "",
            displacement: null,
            horsepower: null,
            torque: null,
            cylinderConfiguration: "",
            compressionRatio: null,
            valvesPerCylinder: null,
            valveMechanism: "",
            fuelSystem: "",
            maxSpeedKmh: null,
          },
          steering: {
            steeringType: "",
            powerAssisted: "",
            minimumTurningRadius: null,
          },
          wheelstyres:{
  wheelType: "",
  wheelSizeIn: null,
  pcd: "",
  tyreSize: null,
  spareTyreSizeValue: "",
  spareTyreSizeIn: null
},
          suspensionBrakes: {
            suspensionType: "",
            brakeType: "",
          },
          fuelEconomy: {
            fuelTankCapacity: 0,
            mileageCityKml: 0,
            mileageHighwayKml: 0,
          },
          carVersionFeatures:[
            {value: "", feature:{id: 1}},
            {value: "", feature:{id: 2}},
            {value: "", feature:{id: 3}},
            {value: "", feature:{id: 4}},
            {value: "", feature:{id: 5}},
            {value: "", feature:{id: 6}},
            {value: "", feature:{id: 7}},
            {value: "", feature:{id: 8}},
            {value: "", feature:{id: 9}},
            {value: "", feature:{id: 10}},
            {value: "", feature:{id: 11}},
            {value: "", feature:{id: 12}},
            {value: "", feature:{id: 13}},
            {value: "", feature:{id: 14}},
            {value: "", feature:{id: 15}},
            {value: "", feature:{id: 16}},
            {value: "", feature:{id: 17}},
            {value: "", feature:{id: 18}},
            {value: "", feature:{id: 19}},
            {value: "", feature:{id: 20}},
            {value: "", feature:{id: 21}},
            {value: "", feature:{id: 22}},
            {value: "", feature:{id: 23}},
            {value: "", feature:{id: 24}},
            {value: "", feature:{id: 25}},
            {value: "", feature:{id: 26}},
            {value: "", feature:{id: 27}},
            {value: "", feature:{id: 28}},
            {value: "", feature:{id: 29}},
            {value: "", feature:{id: 30}},
            {value: "", feature:{id: 31}},
            {value: "", feature:{id: 32}},
            {value: "", feature:{id: 33}},
            {value: "", feature:{id: 34}},
            {value: "", feature:{id: 35}},
            {value: "", feature:{id: 36}},
            {value: "", feature:{id: 37}},
            {value: "", feature:{id: 38}},
            {value: "", feature:{id: 39}},
            {value: "", feature:{id: 40}},
            {value: "", feature:{id: 41}},
            {value: "", feature:{id: 42}},
            {value: "", feature:{id: 43}},
            {value: "", feature:{id: 44}},
            {value: "", feature:{id: 45}},
            {value: "", feature:{id: 46}},
            {value: "", feature:{id: 47}},
            {value: "", feature:{id: 48}},
            {value: "", feature:{id: 49}},
            {value: "", feature:{id: 50}},
            {value: "", feature:{id: 51}},
            {value: "", feature:{id: 52}},
            {value: "", feature:{id: 53}},
            {value: "", feature:{id: 54}},
            {value: "", feature:{id: 55}},
            {value: "", feature:{id: 56}},
            {value: "", feature:{id: 57}},
            {value: "", feature:{id: 58}},
            {value: "", feature:{id: 59}},
            {value: "", feature:{id: 60}},
            {value: "", feature:{id: 61}},
            {value: "", feature:{id: 62}},
            {value: "", feature:{id: 63}},
            {value: "", feature:{id: 64}},
            {value: "", feature:{id: 65}},
            // {value: "", carVersionId: "62"},
          ],
          fuelType: {
            id: 0,
          },
          transmission: {
            id: null  
        },
        gearbox: {
            id: null  
        },
        numberofdoor:{
          id: null
        },
        numberofseating:{
          id:null
        },
        numberofcylinder:{
        id:null
        },
        wheelDriveType: {
          id: null   
        },
        vehicleType: {
          id: null  
        },
        id:null,
        model: {
          id: null  
        },
        }));
        setLoading(false)
        toast.success("Data Submitted Successfully");
        // navigate("/addcardata")
      }
      // setInput({
      //     name:'',
      //     email:"",
      //     address:"",
      //     cloudinary_src:"",
      //     cloud_id:"",
      // })
      // ref.current.value = ""

  }
  ).catch((err)=>{
    console.log(err)
  setLoading(false)
  }).finally(()=>setLoading(false))
  } catch (err) {
    alert(err.message);
  } finally{
setLoading(false)
  }
};


const handlePrice = (e)=>{
  setCarDataTable((prevState) => ({
    ...prevState,
    price: e.target.value || ""
  }));}
  const handleSelectedVersion = (e) => {
    const selectedOption = e.target.options[e.target.selectedIndex]; // Get the selected option
    const selectedId = Number(selectedOption.id); // Get the ID of the selected option
    const selectedValue = selectedOption.value; // Get the value of the selected option
    const arabicName = selectedOption.getAttribute('arabic_name'); // Get the custom attribute 'arabic_name'
    const yearName = selectedOption.getAttribute('year_name'); // Get the custom attribute 'year_name'

    console.log(selectedId, selectedValue, arabicName, yearName, "Here is the selected version ID, value, Arabic name, and Year name");

    // Update the carDataTable state
    setCarDataTable((prevState) => {
      //   const updatedFeatures = prevState.carVersionFeatures.map((feature) => {
      //       return { ...feature, carVersion: { id: selectedId } };
      //   }
      // );
        return {
            ...prevState,
            name: selectedValue, // Optionally update the name as well
            car_version_Arb_name: arabicName, // Set the Arabic name from the custom attribute
            year: Number(yearName),
            id: selectedId
        };
    });
};
const priceInRupees = 1;
  return (
    <>
    <div className="pt-32 shadow-lg">
      <div className="min-h-screen">
        <h1 className="text-center font-bold text-3xl">Add Car Data</h1>
        <h1 className="ml-4 font-bold text-lg mt-4">
          Select Make Model and Version
        </h1>

        <div className="flex justify-between m-auto w-[70%] mt-8">
        <select
        className="w-[25%] border-blue-300 border p-2 rounded"
        name="cars"
        onChange={handleSelectChange}
        // defaultValue=""
      >
        <option value="" >
          Select Make
        </option>

        {/* Popular Cars */}
        <optgroup label="Popular">
          {makeData.popular.map((item) => (
            <option key={item.name.en} value={item.name.id}>
              {item.name.en}
            </option>
          ))}
        </optgroup>

        {/* Other Cars */}
        <optgroup label="Others">
          {makeData.others.map((item) => (
            <option key={item.name.en} value={item.name.id}>
              {item.name.en}
            </option>
          ))}
        </optgroup>
      </select>
      <select onChange={handleVersions} className="w-[25%] border-blue-300 border p-2 rounded" name="cars">
  <option value="" >
    Select Model
  </option>
  {/* Popular Cars */}
  {modelMap[make]?.popular?.length > 0 && (
  <optgroup label="Popular">
    {modelMap[make].popular.map((item) => (
      <option key={item.en} value={item.id}>
        {item.en}
      </option>
    ))}
  </optgroup>
)}

  {/* Other Cars */}
  {modelMap[make]?.others?.length > 0 && (
  <optgroup label="Others">
    {modelMap[make].others.map((item) => (
      <option key={item.en} value={item.id}>
        {item.en}
      </option>
    ))}
  </optgroup>
)}

</select>

<select
  className="w-[25%] border-blue-300 border p-2 rounded"
  onChange={handleSelectedVersion} // Ensure the correct handler is called
   // Set the default value
>
  <option value="" >
   Select Version
  </option> {/* Disabled default option */}

  {carVersion?.length > 0 ? ( // If carVersion has data, display options
    carVersion.map((car) => (
      <option 
        key={car.name} // Use a unique key like car.id
        value={car.name} // Use car.name for the value, or car.id if needed
        arabic_name={car.car_version_Arb_name} // Custom attribute for Arabic name
        year_name={car.year} // Custom attribute for Year name
        id={car.id}
      >
        {car.name}
      </option>
    ))
  ) : (
    <option >
      Version not found
    </option>
  )}
</select>





        </div>
        <div className="flex mt-6 justify-between">
        <h1 className="ml-4 font-bold text-lg mt-4">
          Add Price
        </h1>
        <h1 className="ml-4 font-bold text-lg mt-4">
          Add Photo
        </h1>
        <h1 className="ml-4 font-bold text-lg mt-4">
          
        </h1>
        </div>

        <div className="flex justify-between m-auto w-[70%] mt-8">
        <input
        className="w-[25%] border-blue-300 border p-2 rounded"
type="text"
        name="cars"
        onChange={handlePrice}
        value={carDataTable.price.length > 0 ? carDataTable.price : ""}
        // defaultValue=""
        placeholder="Enter Price Here"
        required
      >
      </input>
      <input 
      onChange={(e)=>setImage(e.target.files[0])}
      type="file">
      </input>
      {/* <select onChange={handleVersions} className="w-[25%] border-blue-300 border p-2 rounded" name="cars">
  <option value="" selected>
    Select Model
  </option>

  {modelMap[make]?.popular?.length > 0 && (
  <optgroup label="Popular">
    {modelMap[make].popular.map((item) => (
      <option key={item.en} value={item.id}>
        {item.en}
      </option>
    ))}
  </optgroup>
)}


  {modelMap[make]?.others?.length > 0 && (
  <optgroup label="Others">
    {modelMap[make].others.map((item) => (
      <option key={item.en} value={item.id}>
        {item.en}
      </option>
    ))}
  </optgroup>
)}

</select>

<select
  className="w-[25%] border-blue-300 border p-2 rounded"
  onChange={handleSelectedVersion}
>
  <option value="" disabled selected>
    Version
  </option> 
  
  {carVersion && carVersion.length > 0 ? ( 
    carVersion.map((car) => (
      <option 
      id={car.id} 
      key={car.id} 
      value={car.version} 
      arabic_name={car.car_version_Arb_name} 
      year_name={car.year} 
    >
      {car.name}
    </option> 
    ))
  ) : <option value="" selected> version not found</option>} 
</select> */}


        </div>

        {/* General */}
        {/* <div className="mt-24 p-4">
          <button
            onClick={() => setwheelTypeAccordian(!wheelTypeAccordian)}
            className={`flex bg-slate-300 p-2 font-bold text-lg rounded mb-2 w-[100%] justify-between`}
          >
            <span>General Information</span>
            {wheelTypeAccordian ? (
              <MdExpandLess className={`font-bold text-lg`} />
            ) : (
              <MdExpandMore className={`text-lg`} />
            )}
          </button>
          <div
            className={`grid overflow-hidden transition-all  duration-500 ${
              wheelTypeAccordian ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <div className="flex gap-6">
                <select className="w-[25%] border-blue-300 border p-2 rounded">
                  <option selected>Wheel Drive Types</option>
                  <option>4x4</option>
                  <option>FWD</option>
                  <option>RWD</option>
                  <option>AWD</option>
                </select>
                <select className="w-[25%] border-blue-300 border p-2 rounded">
                  <option selected>vehicle type</option>
                  <option>Sedan</option>
                  <option>Hatchback</option>
                  <option>SUV</option>
                  <option>Crossover</option>
                  <option>Coupe</option>
                  <option>Minivan</option>
                  <option>Pickup Truck</option>
                  <option>Wagon</option>
                  <option>Van</option>
                  <option>Sports Car</option>
                  <option>Luxury Car</option>
                  <option>Motorcycle</option>
                  <option>ATV</option>
                  <option>RV</option>
                  <option>Truck</option>
                  <option>Bus</option>
                </select>
                <select className="w-[25%] border-blue-300 border p-2 rounded">
                  <option selected>Fuel Types</option>
                  <option>Petrol</option>
                  <option>Diesel</option>
                  <option>Hybrid</option>
                  <option>Electric</option>
                  <option>CNG</option>
                  <option>LPG</option>
                </select>
                <select className="w-[25%] border-blue-300 border p-2 rounded">
                  <option selected>Transmission</option>
                  <option>Automatic</option>
                  <option>Manual</option>
                </select>
              </div>
              <br />
              <div className="flex gap-6">
                <input
                  type="text"
                  className="w-[25%] p-2 border border-blue-300 rounded placeholder:!text-black/70 "
                  placeholder="Enter No of Doors"
                />
                <input
                  type="text"
                  className="w-[25%] p-2 border border-blue-300 rounded placeholder:!text-black/70 "
                  placeholder="Enter Seating Capacity"
                />
                <input
                  type="text"
                  className="w-[25%] p-2 border border-blue-300 rounded placeholder:!text-black/70 "
                  placeholder="Enter Engine Capacity"
                />
                <input
                  type="text"
                  className="w-[25%] p-2 border border-blue-300 rounded placeholder:!text-black/70 "
                  placeholder="Enter No of Cylinder"
                />
              </div>
            </div>
          </div>
        </div> */}
        {/* dimension */}
        <div className="p-4 mt-12">
  <button
    onClick={() => setdimensionTypeAccordian(!dimensionTypeAccordian)}
    className="flex bg-slate-300 p-2 font-bold text-lg rounded mb-2 w-[100%] justify-between"
  >
    <span>Dimension</span>
    {dimensionTypeAccordian ? (
      <MdExpandLess className="font-bold text-lg" />
    ) : (
      <MdExpandMore className="text-lg" />
    )}
  </button>

  {dimensionTypeAccordian && (
    <div className="grid gap-4">
      <div className="m-auto w-full flex flex-wrap ">
        <select
          onChange={(e) =>
            setCarDataTable((prevState) => ({
              ...prevState,
              wheelDriveType: {
                ...prevState.wheelDriveType,
                id: Number(e.target.value) || 0,
              },
            }))
          }
          className="w-[45%] border-blue-300 border p-2 rounded"
        >
          <option selected={!carDataTable?.wheelDriveType?.id} disabled>
            Wheel Drive Types
          </option>
          <option value="1">Front Wheel Drive</option>
          <option value="2">Rear Wheel Drive</option>
          <option value="3">All Wheel Drive</option>
          <option value="4">4x4</option>
        </select>
        <select
          onChange={(e) =>
            setCarDataTable((prevState) => ({
              ...prevState,
              vehicleType: {
                ...prevState.vehicleType,
                id: Number(e.target.value) || 0,
              },
            }))
          }
          className="w-[45%] border-blue-300 ml-16 border p-2 rounded"
        >
          <option selected={!carDataTable?.vehicleType?.id} disabled>
            Vehicle Type
          </option>
          <option value="1">Sedan</option>
          <option value="2">Hatchback</option>
          <option value="3">SUV</option>
          <option value="4">Truck</option>
          <option value="5">Bus</option>
          <option value="6">Sports Car</option>
          <option value="7">Crossover</option>
          <option value="8">Coupe</option>
          <option value="9">Minivan</option>
          <option value="10">Pickup Truck</option>
          <option value="11">Wagon</option>
          <option value="12">Van</option>
          <option value="13">Luxury Car</option>
          <option value="14">ATV</option>
          <option value="15">RV</option>
        </select>
        <select
          onChange={(e) =>
            setCarDataTable((prevState) => ({
              ...prevState,
              dimension: {
                ...prevState.dimension,
                numberofdoor:{
                  ...prevState.dimension.numberofdoor,
                  id: Number(e.target.value)} },
            }))
          }
          className="w-[45%] mt-4 border-blue-300 border p-2 rounded"
        >
          <option selected={!carDataTable?.dimension?.numberofdoor?.id} disabled>
            No of Doors
          </option>
          <option value="1">2</option>
          <option value="2">3</option>
          <option value="3">4</option>
          <option value="4">5</option>
        </select>
        <select
          onChange={(e) =>
            setCarDataTable((prevState) => ({
              ...prevState,
              dimension: {
                ...prevState.dimension,
                numberofseating:{
                  ...prevState.dimension.numberofseating,
                  id: Number(e.target.value)} },
            }))
          }
          className="w-[45%] mt-4 border-blue-300 border ml-16 p-2 rounded"
        >
          <option selected={!carDataTable?.dimension?.numberofseating?.id} disabled>
            Number of Seating Capacity
          </option>
          <option value="1">2 Seater</option>
          <option value="2">4 Seater</option>
          <option value="3">5 Seater</option>
          <option value="4">6 Seater</option>
          <option value="5">7 Seater</option>
          <option value="6">8 Seater</option>
          <option value="7">8+ Seater</option>
        </select>
      </div>

      <div className="flex flex-wrap gap-2">
        {[
          { name: "overallLength", label: "Overall Length (mm)", type: "number" },
          { name: "overallWidth", label: "Overall Width (mm)", type: "number" },
          { name: "overallHeight", label: "Overall Height (mm)", type: "number" },
          { name: "wheelBase", label: "Wheel Base (mm)", type: "number" },
          { name: "groundClearance", label: "Ground Clearance (mm)", type: "number" },
          { name: "kerbWeight", label: "Kerb Weight (kg)", type: "number" },
          { name: "bootSpace", label: "Boot Space (L)", type: "number" },
        ].map((dimension, index) => (
          <div key={index} className="grid items-center w-[30%]">
            <div>
              <p className="p-2 font-bold">{dimension.label}:</p>
              <input
                name={dimension.name}
                value={carDataTable.dimension[dimension.name] || ""} // Ensure it's empty if undefined
                onChange={(e) =>
                  setCarDataTable((prevState) => ({
                    ...prevState,
                    dimension: {
                      ...prevState.dimension,
                      [dimension.name]:
                        dimension.type === "number"
                          ? Number(e.target.value) || 0
                          : e.target.value,
                    },
                  }))
                }
                placeholder="Enter in English"
                className="border p-2 w-[100%] col-span-2"
                type={dimension.type === "number" ? "number" : "text"}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )}
</div>




        {/* engine */}
        <div className="p-4">
  <button
    onClick={() => setengineTypeAccordian(!engineTypeAccordian)}
    className="flex bg-slate-300 p-2 font-bold text-lg rounded mb-2 w-[100%] justify-between"
  >
    <span>Engine</span>
    {engineTypeAccordian ? (
      <MdExpandLess className="font-bold text-lg" />
    ) : (
      <MdExpandMore className="text-lg" />
    )}
  </button>

  {engineTypeAccordian && (
    <div className="grid gap-4">
       <div className="m-auto w-full flex flex-wrap ">
        <select
          onChange={(e) =>
            setCarDataTable((prevState) => ({
              ...prevState,
              engine: {
                ...prevState.engine,
                numberofcylinder:{
                  ...prevState.engine.numberofcylinder,
                  id: Number(e.target.value)} },
            }))
          }
          className="w-[45%] border-blue-300 border p-2 rounded"
        >
          <option selected={!carDataTable?.engine?.numberofcylinder?.id} disabled>
            Number of Cylinders
          </option>
          <option value="1">3 Cylinder</option>
          <option value="2">4 Cylinder</option>
          <option value="3">5 Cylinder</option>
          <option value="4">6 Cylinder</option>
          <option value="5">8 Cylinder</option>
          <option value="6">10 Cylinder</option>
          <option value="7">12 Cylinder</option>
          <option value="8">16 Cylinder</option>
        </select>
        <select
        className="w-[40%] ml-16 border-blue-300 border p-2 rounded"
        // value={carDataTable.engine.engineType || ""}
        onChange={(e) =>
          setCarDataTable((prevState) => ({
            ...prevState,
            engine: {
              ...prevState.engine,
              engineType: e.target.value,
            },
          }))
        }
      >
        <option disabled selected={!carDataTable?.engine?.engineType?.length}>Engine Type</option>
        <option>Petrol</option>
        <option>Diesel</option>
        <option>Electric</option>
        <option>CNG</option>
        <option>LPG</option>
        <option>Hybrid</option>
      </select>
      
      </div>
      <div className="flex flex-wrap gap-2">
        {[
          // { name: "engineType", label: "Engine type", type: "string" },
          { name: "displacement", label: "Displacement cc", type: "number" },
          { name: "horsepower", label: "Horsepower", type: "string" },
          { name: "torque", label: "Torque", type: "string" },
          { name: "cylinderConfiguration", label: "Cylinder configuration", type: "string" },
          // { name: "numberOfCylinders", label: "Number of Cylinder", type: "number" },
          { name: "compressionRatio", label: "Compression ratio", type: "string"},
          { name: "valvesPerCylinder", label: "Valves per cylinder", type: "number" },
          { name: "valveMechanism", label: "Valve mechanism", type: "string" },
          { name: "fuelSystem", label: "Fuel system", type: "string" },
          { name: "maxSpeedKmh", label: "Max speed kmh", type: "number" },
        ].map((engine, index) => (
          <div key={index} className="grid items-center w-[30%]">
            <div>
              <p className="p-2 font-bold">{engine.label}:</p>
              <input
                name={engine.name}
                value={carDataTable.engine[engine.name] || ""} // Ensure it is empty if undefined
                onChange={(e) =>
                  setCarDataTable((prevState) => ({
                    ...prevState,
                    engine: {
                      ...prevState.engine,
                      [engine.name]:
                        engine.type === "number"
                          ? Number(e.target.value) || 0
                          : e.target.value,
                    },
                  }))
                }
                placeholder="Enter in English"
                className="border p-2 w-[100%] col-span-2"
                type={engine.type === "number" ? "number" : "text"}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )}
</div>

{/* Wheels and Tyres start */}
<div className="p-4">
  <button
    onClick={() => setWheelsAndTyres(!wheelsAndTyres)}
    className="flex bg-slate-300 p-2 font-bold text-lg rounded mb-2 w-[100%] justify-between"
  >
    <span>Wheels and Tyres</span>
    {wheelsAndTyres ? (
      <MdExpandLess className="font-bold text-lg" />
    ) : (
      <MdExpandMore className="text-lg" />
    )}
  </button>

  {wheelsAndTyres && (
    <div className="grid gap-4">
      <select
        onChange={(e) =>
          setCarDataTable((prevState) => ({
            ...prevState,
            wheelstyres: {
              ...prevState.wheelstyres,
              wheelType: e.target.value,
            },
          }))
        }
        className="m-auto w-[45%] border-blue-300 border p-2 rounded"
      >
        <option  disabled selected={!carDataTable?.wheelstyres?.wheelType?.length}>
          Wheel Types
        </option>
        <option value="Steel Wheels">Steel Wheels</option>
        <option value="Alloy Wheels">Alloy Wheels</option>
        <option value="Steel Wheels With Wheel Caps">Steel Wheels With Wheel Caps</option>
        <option value="Chrome Wheels">Chrome Wheels</option>
        <option value="Forged Wheels">Forged Wheels</option>
        <option value="Magnesium Wheels">Magnesium Wheels</option>
        <option value="Carbon Fiber Wheels">Carbon Fiber Wheels</option>
        <option value="Carbon Fiber Wheels">Carbon Fiber Wheels</option>
        <option value="Split Rim Wheels">Split Rim Wheels</option>
        <option value="Wire Wheels">Wire Wheels</option>
        <option value="Beadlock Wheels">Beadlock Wheels</option>
      </select>

      <div className="flex flex-wrap gap-2">
        {[
          { name: "pcd", label: "PCD", type: "string" },
          { name: "wheelSizeIn", label: "Wheel Size", type: "number" },
          { name: "tyreSize", label: "Tyre Size", type: "string" },
          { name: "spareTyreSizeIn", label: "Spare Tyre Size", type: "number" },
        ].map((wheelstyres, index) => (
          <div key={index} className="grid items-center w-[30%]">
            <div>
              <p className="p-2 font-bold">{wheelstyres.label}:</p>
             <input
                name={wheelstyres.name}
                value={carDataTable.wheelstyres[wheelstyres.name] || ""} // Ensure it's empty if undefined
                onChange={(e) =>
                  setCarDataTable((prevState) => ({
                    ...prevState,
                    wheelstyres: {
                      ...prevState.wheelstyres,
                      [wheelstyres.name]:
                        wheelstyres.type === "number"
                          ? Number(e.target.value) || 0
                          : e.target.value,
                    },
                  }))
                }
                placeholder="Enter in English"
                className="border p-2 w-[100%] col-span-2"
                type={wheelstyres.type === "number" ? "number" : "text"}
              />
            </div>
          </div>
        ))}
        <div>
        <p className="p-2 font-bold">Spare Tyre:</p>
        <div className="flex gap-x-2"> 
        <div className="flex">
          <p className="p-2 font-bold">Yes</p>
          <input
              type="radio"
              name="yes"
              id="wheelsyes"
              value="yes"
              checked={carDataTable.wheelstyres.spareTyreSizeValue === "yes"}
              onChange={(e) =>
                setCarDataTable((prevState) => ({
                  ...prevState,
                  wheelstyres: {
                    ...prevState.wheelstyres,
                    spareTyreSizeValue: e.target.value,
                  },
                }))
              }
            />
        </div>
        <div className="flex">
          <p className="p-2 font-bold">No</p>
          <input
              type="radio"
              name="no"
              id="wheelsno"
              value="no"
              checked={carDataTable.wheelstyres.spareTyreSizeValue === "no"}
              onChange={(e) =>
                setCarDataTable((prevState) => ({
                  ...prevState,
                  wheelstyres: {
                    ...prevState.wheelstyres,
                    spareTyreSizeValue: e.target.value,
                  },
                }))
              }
            />
        </div>
       
      </div>
      </div>
      </div>
      
    </div>
  )}
</div>
{/* Wheels and Tyres end */}
        {/* steering */}
        <div className="p-4">
  <button
    onClick={() => setsteeringAccordian(!steeringAccordian)}
    className="flex bg-slate-300 p-2 font-bold text-lg rounded mb-2 w-[100%] justify-between"
  >
    <span>Steering</span>
    {steeringAccordian ? (
      <MdExpandLess className="font-bold text-lg" />
    ) : (
      <MdExpandMore className="text-lg" />
    )}
  </button>
  
  <div
    className={`grid overflow-hidden transition-all duration-500 ${
      steeringAccordian ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
    }`}
  >
    <div className="overflow-hidden">
      <select
        className="w-[40%] border-blue-300 border p-2 rounded"
        // value={carDataTable.steering.steeringType || ""}
        onChange={(e) =>
          setCarDataTable((prevState) => ({
            ...prevState,
            steering: {
              ...prevState.steering,
              steeringType: e.target.value,
            },
          }))
        }
      >
        <option selected={!carDataTable?.steering?.steeringType?.length} disabled>Steering Type</option>
        <option>Rack and Pinion Steering</option>
        <option>Recirculating Ball Steering</option>
        <option>Hydraulic Power Steering (HPS)</option>
        <option>Electric Power Steering (EPS)</option>
        <option>Electric Hydraulic Power Steering (EHPS)</option>
        <option>Four-Wheel Steering</option>
      </select>

      <select
        className="w-[40%] border-blue-300 border p-2 rounded ml-20"
        // value={carDataTable.steering.powerAssisted || ""}
        onChange={(e) =>
          setCarDataTable((prevState) => ({
            ...prevState,
            steering: {
              ...prevState.steering,
              powerAssisted: e.target.value,
            },
          }))
        }
      >
        <option selected={!carDataTable?.steering?.powerAssisted} disabled>Power Assisted</option>
        <option>Hydraulic Power Steering (HPS)</option>
        <option>Electric Power Steering (EPS)</option>
        <option>Electric Hydraulic Power Steering (EHPS)</option>
      </select>

      <br />
      <br />

      <div className="grid grid-cols-2 w-[40%] gap-4 items-center">
        <p className="p-2 font-bold">Minimum turning radius:</p>
        <input
          type="number"
          placeholder="Enter in English"
          className="border p-2 w-[270px] col-span-1"
          value={carDataTable.steering.minimumTurningRadius || ""} // Ensure it is empty if undefined
          onChange={(e) =>
            setCarDataTable((prevState) => ({
              ...prevState,
              steering: {
                ...prevState.steering,
                minimumTurningRadius: Number(e.target.value), // Store as a number
              },
            }))
          }
        />
      </div>
    </div>
  </div>
</div>

{/* transmission start  */}
<div className="p-4">
  <button
    onClick={() => setTransmissionTable(!transmissionTable)}
    className="flex bg-slate-300 p-2 font-bold text-lg rounded mb-2 w-[100%] justify-between"
  >
    <span>Transmission</span>
    {transmissionTable ? (
      <MdExpandLess className="font-bold text-lg" />
    ) : (
      <MdExpandMore className="text-lg" />
    )}
  </button>
  
  <div
    className={`grid  overflow-hidden transition-all duration-500 ${
      transmissionTable ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
    }`}
  >
    <div className="overflow-hidden ">

    <select
        onChange={(e) =>
          setCarDataTable((prevState) => ({
            ...prevState,
            transmission: {
              ...prevState.transmission,
              id: Number(e.target.value),
            },
          }))
        }
        className="w-[40%] border-blue-300 border p-2 rounded ml-20"
      >
        <option  disabled selected={!carDataTable?.transmission?.id}>
          Transmission Types
        </option>
        <option value="1">Manual</option>
        <option value="2">Automatic</option>
        <option value="3">CVT</option>
        <option value="6">Automatic(CVT)</option>
        <option value="7">Manual(CVT)</option>
      </select>

      <select
        onChange={(e) =>
          setCarDataTable((prevState) => ({
            ...prevState,
            gearbox: {
              ...prevState.gearbox,
              id: Number(e.target.value) || 0,
            },
          }))
        }
        className="w-[40%] border-blue-300 border p-2 rounded ml-20"
      >
        <option  disabled selected={!carDataTable?.gearbox?.id}>
          Gearbox
        </option>
        <option value="7">1-Speed</option>
        <option value="8">2-Speed</option>
        <option value="9">3-Speed</option>
        <option value="3">4-Speed</option>
        <option value="1">5-Speed</option>
        <option value="2">6-Speed</option>
        <option value="6">7-Speed</option>
        <option value="4">8-Speed</option>
      </select>
    </div>
  </div>
</div>
{/* transmission  end */}
        {/* suspension and brakes */}
        <div className="p-4">
  <button
    onClick={() => setsuspensionAccordian(!suspensionAccordian)}
    className="flex bg-slate-300 p-2 font-bold text-lg rounded mb-2 w-[100%] justify-between"
  >
    <span>Suspension & Brakes</span>
    {suspensionAccordian ? (
      <MdExpandLess className="font-bold text-lg" />
    ) : (
      <MdExpandMore className="text-lg" />
    )}
  </button>
  
  <div
    className={`grid overflow-hidden transition-all duration-500 ${
      suspensionAccordian ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
    }`}
  >
    <div className="grid grid-cols-2 overflow-hidden">
    <select
        className="w-[40%] ml-16 border-blue-300 border p-2 rounded"
        // value={carDataTable.engine.engineType || ""}
        onChange={(e) =>
          setCarDataTable((prevState) => ({
            ...prevState,
            suspensionBrakes: {
              ...prevState.suspensionBrakes,
              suspensionType: e.target.value,
            },
          }))
        }
      >
        <option disabled selected={!carDataTable?.suspensionBrakes?.suspensionType?.length}>Suspensions Type</option>
        <option>McPherson Strut Coil Springs:McPherson Strut Coil Springs</option>
        <option>McPherson Strut Coil Springs:Torsion Beam with Coil Springs</option>
        <option>McPherson Strut Coil Springs:Tube Shocks coil spring</option>
        <option>McPherson Strut Coil Springs:Multi-Link Wishbone</option>
        <option>McPherson Strut Coil Springs:Double Wishbone</option>
        <option>McPherson Strut Coil Springs:Tube Shocks with Leaf Springs</option>
        <option>McPherson Strut Coil Springs:Trailing Arm</option>
        <option>Torsion Beam with Coil Springs:Torsion Beam with Coil Springs</option>
        <option>Torsion Beam with Coil Springs:McPherson Strut Coil Springs</option>
        <option>Torsion Beam with Coil Springs:Tube Shocks coil spring</option>
        <option>Torsion Beam with Coil Springs:Multi-Link Wishbone</option>
        <option>Torsion Beam with Coil Springs:Double Wishbone</option>
        <option>Torsion Beam with Coil Springs:Tube Shocks with Leaf Springs</option>
        <option>Torsion Beam with Coil Springs:Trailing Arm</option>
        <option>Tube Shocks coil spring:Tube Shocks coil spring</option>
        <option>Tube Shocks coil spring:Torsion Beam with Coil Springs</option>
        <option>Tube Shocks coil spring:McPherson Strut Coil Springs</option>
        <option>Tube Shocks coil spring:Multi-Link Wishbone</option>
        <option>Tube Shocks coil spring:Double Wishbone</option>
        <option>Tube Shocks coil spring:Tube Shocks with Leaf Springs</option>
        <option>Tube Shocks coil spring:Trailing Arm</option>
        <option>Tube Shocks coil spring:Trailing Arm</option>
        <option>Multi-Link Wishbone:Multi-Link Wishbone</option>
        <option>Multi-Link Wishbone:McPherson Strut Coil Springs</option>
        <option>Multi-Link Wishbone:Torsion Beam with Coil Springs</option>
        <option>Multi-Link Wishbone:Tube Shocks with Leaf Springs</option>
        <option>Multi-Link Wishbone:Double Wishbone</option>
        <option>Multi-Link Wishbone:Trailing Arm</option>
        <option>Double Wishbone:Double Wishbone</option>
        <option>Double Wishbone:McPherson Strut Coil Springs</option>
        <option>Double Wishbone:Tube Shocks coil spring</option>
        <option>Double Wishbone:Torsion Beam with Coil Springs</option>
        <option>Double Wishbone:Tube Shocks with Leaf Springs</option>
        <option>Double Wishbone:Trailing Arm</option>
        <option>Tube Shocks with Leaf Springs:Tube Shocks with Leaf Springs</option>
        <option>Tube Shocks with Leaf Springs:McPherson Strut Coil Springs</option>
        <option>Tube Shocks with Leaf Springs:Torsion Beam with Coil Springs</option>
        <option>Tube Shocks with Leaf Springs:Tube Shocks coil spring</option>
        <option>Tube Shocks with Leaf Springs:Double Wishbone</option>
        <option>Tube Shocks with Leaf Springs:Trailing Arm</option>
        <option>Trailing Arm:McPherson Strut Coil Springs</option>
        <option>Trailing Arm:Torsion Beam with Coil Springs</option>
        <option>Trailing Arm:Tube Shocks coil spring</option>
        <option>Trailing Arm:Multi-Link Wishbone</option>
        <option>Trailing Arm:Double Wishbone</option>
        <option>Trailing Arm:Tube Shocks with Leaf Springs</option>
        <option>Air:Air</option>
      </select>
    <select
        className="w-[40%] ml-16 border-blue-300 border p-2 rounded"
        // value={carDataTable.engine.engineType || ""}
        onChange={(e) =>
          setCarDataTable((prevState) => ({
            ...prevState,
            suspensionBrakes: {
              ...prevState.suspensionBrakes,
              brakeType: e.target.value,
            },
          }))
        }
      >
        <option disabled selected={!carDataTable?.suspensionBrakes?.brakeType?.length}>Brakes Type</option>
        <option>Solid Disc:Solid Disc</option>
        <option>Solid Disc:Drum</option>
        <option>Solid Disc:Ventilated Disc</option>
        <option>Ventilated Disc:Ventilated Disc</option>
        <option>Ventilated Disc:Solid Disc</option>
        <option>Ventilated Disc:Drum</option>
        <option>Drum:Drum</option>
        <option>Drum:Ventilated Disc</option>
        <option>Drum:Solid Disc</option>
      </select>
      {/* <div>
        <div>
          <p className="p-2 font-bold">Suspension:</p>
        </div>
        <div className="flex gap-4 p-2">
          <div>
            <input
              type="radio"
              name="suspension"
              id="frontSuspension"
              value="Front Suspension"
              checked={carDataTable.suspensionBrakes.suspensionType === "Front Suspension"}
              onChange={(e) =>
                setCarDataTable((prevState) => ({
                  ...prevState,
                  suspensionBrakes: {
                    ...prevState.suspensionBrakes,
                    suspensionType: e.target.value,
                  },
                }))
              }
            />
            <span> Front Suspension</span>
          </div>
          <div>
            <input
              type="radio"
              name="suspension"
              id="backSuspension"
              value="Back Suspension"
              checked={carDataTable.suspensionBrakes.suspensionType === "Back Suspension"}
              onChange={(e) =>
                setCarDataTable((prevState) => ({
                  ...prevState,
                  suspensionBrakes: {
                    ...prevState.suspensionBrakes,
                    suspensionType: e.target.value,
                  },
                }))
              }
            />
            <span> Back Suspension</span>
          </div>
        </div>
      </div> */}

      {/* <div>
        <div>
          <p className="p-2 font-bold">Brakes:</p>
        </div>
        <div className="flex gap-4 p-2">
          <div>
            <input
              type="radio"
              name="brakes"
              id="frontBrakes"
              value="Front Brakes"
              checked={carDataTable.suspensionBrakes.brakeType === "Front Brakes"}
              onChange={(e) =>
                setCarDataTable((prevState) => ({
                  ...prevState,
                  suspensionBrakes: {
                    ...prevState.suspensionBrakes,
                    brakeType: e.target.value,
                  },
                }))
              }
            />
            <span> Front Brakes</span>
          </div>
          <div>
            <input
              type="radio"
              name="brakes"
              id="backBrakes"
              value="Back Brakes"
              checked={carDataTable.suspensionBrakes.brakeType === "Back Brakes"}
              onChange={(e) =>
                setCarDataTable((prevState) => ({
                  ...prevState,
                  suspensionBrakes: {
                    ...prevState.suspensionBrakes,
                    brakeType: e.target.value,
                  },
                }))
              }
            />
            <span> Back Brakes</span>
          </div>
        </div>
      </div> */}
    </div>
  </div>
</div>


        {/* fuel economy */}
        <div className="p-4">
  <button
    onClick={() => setfuelEconomyAccordian(!fuelEconomyAccordian)}
    className="flex bg-slate-300 p-2 font-bold text-lg rounded mb-2 w-[100%] justify-between"
  >
    <span>Fuel Economy</span>
    {fuelEconomyAccordian ? (
      <MdExpandLess className="font-bold text-lg" />
    ) : (
      <MdExpandMore className="text-lg" />
    )}
  </button>

  {fuelEconomyAccordian && (
    <div className="grid gap-4">
      <select
        onChange={(e) =>
          setCarDataTable((prevState) => ({
            ...prevState,
            fuelType: {
              ...prevState.fuelType,
              id: Number(e.target.value) || 0,
            },
          }))
        }
        className="m-auto w-[45%] border-blue-300 border p-2 rounded"
      >
        <option  disabled selected={!carDataTable?.fuelType?.id}>
          Fuel Types
        </option>
        <option value="1">Petrol</option>
        <option value="2">Diesel</option>
        <option value="3">Electric</option>
        <option value="4">CNG</option>
        <option value="5">LPG</option>
        <option value="6">Hybrid</option>
      </select>

      <div className="flex flex-wrap gap-2">
        {[
          { name: "fuelTankCapacity", label: "Fuel tank capacity (L)", type: "number" },
          { name: "mileageCityKml", label: "Mileage city (km/l)", type: "number" },
          { name: "mileageHighwayKml", label: "Mileage highway (km/l)", type: "number" },
        ].map((fuel, index) => (
          <div key={index} className="grid items-center w-[30%]">
            <div>
              <p className="p-2 font-bold">{fuel.label}:</p>
              <input
                name={fuel.name}
                value={carDataTable.fuelEconomy[fuel.name]}
                onChange={(e) =>
                  setCarDataTable((prevState) => ({
                    ...prevState,
                    fuelEconomy: {
                      ...prevState.fuelEconomy,
                      [fuel.name]: Number(e.target.value) || 0,
                    },
                  }))
                }
                placeholder="Enter in English"
                className="border p-2 w-[100%] col-span-2"
                type="number"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )}
</div>



        {/* safety */}
        <div className="p-4">
      <button
        onClick={() => setSafetyAccordian(!safetyAccordian)}
        className="flex bg-slate-300 p-2 font-bold text-lg rounded mb-2 w-[100%] justify-between"
      >
        <span>Safety</span>
        {safetyAccordian ? (
          <MdExpandLess className="font-bold text-lg" />
        ) : (
          <MdExpandMore className="text-lg" />
        )}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-500 ${
          safetyAccordian ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="grid grid-cols-3 gap-2 overflow-hidden">
          {/* Number of airbags */}
          <div>
            <p className="p-2 font-bold">Number of airbags:</p>
            <div className="flex gap-4 p-2">
              {[0,1,2,4,5,6,7,8,10,12].map((num) => (
                <div key={num}>
                  <input
                    type="radio"
                    value={num.toString()}
                    name="airbags"
                    id={`airbags-${num}`}
                    // checked={carDataTable.suspensionBrakes.suspensionType === "Front Suspension"}
                    checked={carDataTable.carVersionFeatures[0].value === num.toString()}
                    onChange={() => handleFeatureChange(1, num.toString())}
                  />
                  <span> {num}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Number of seatbelts */}
          <div>
            <p className="p-2 font-bold">Number of seatbelts:</p>
            <div className="flex gap-4 p-2">
              {[2, 4, 5, 7].map((num) => (
                <div key={num}>
                  <input
                    type="radio"
                    value={num.toString()}
                    name="seatbelts"
                    id={`seatbelts-${num}`}
                    checked={carDataTable.carVersionFeatures[1].value === num.toString()}
                    onChange={() => handleFeatureChange(2, num.toString())}
                  />
                  <span> {num}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Immobilizer */}
          <div>
            <p className="p-2 font-bold">Immobilizer:</p>
            <div className="flex gap-4 p-2">
              {['yes', 'no'].map((option) => (
                <div key={option}>
                  <input
                    type="radio"
                    value={option}
                    name="immobilizer"
                    id={`immobilizer-${option}`}
                    checked={carDataTable.carVersionFeatures[2].value === option}
                    onChange={() => handleFeatureChange(3, option)}
                  />
                  <span> {option.charAt(0).toUpperCase() + option.slice(1)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ABS */}
          <div>
            <p className="p-2 font-bold">ABS:</p>
            <div className="flex gap-4 p-2">
              {['yes', 'no'].map((option) => (
                <div key={option}>
                  <input
                    type="radio"
                    value={option}
                    name="abs"
                    id={`abs-${option}`}
                    checked={carDataTable.carVersionFeatures[3].value === option}
                    onChange={() => handleFeatureChange(4, option)}
                  />
                  <span> {option.charAt(0).toUpperCase() + option.slice(1)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Downhill Assist Control */}
          <div>
            <p className="p-2 font-bold">Downhill Assist Control:</p>
            <div className="flex gap-4 p-2">
              {['yes', 'no'].map((option) => (
                <div key={option}>
                  <input
                    type="radio"
                    value={option}
                    name="downhill"
                    id={`downhill-${option}`}
                    checked={carDataTable.carVersionFeatures[4].value === option}
                    onChange={() => handleFeatureChange(5, option)}
                  />
                  <span> {option.charAt(0).toUpperCase() + option.slice(1)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hill Start Assist Control */}
          <div>
            <p className="p-2 font-bold">Hill Start Assist Control:</p>
            <div className="flex gap-4 p-2">
              {['yes', 'no'].map((option) => (
                <div key={option}>
                  <input
                    type="radio"
                    value={option}
                    name="hill"
                    id={`hill-${option}`}
                    checked={carDataTable.carVersionFeatures[5].value === option}
                    onChange={() => handleFeatureChange(6, option)}
                  />
                  <span> {option.charAt(0).toUpperCase() + option.slice(1)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Traction Control */}
          <div>
            <p className="p-2 font-bold">Traction Control:</p>
            <div className="flex gap-4 p-2">
              {['yes', 'no'].map((option) => (
                <div key={option}>
                  <input
                    type="radio"
                    value={option}
                    name="traction_control"
                    id={`traction_control-${option}`}
                    checked={carDataTable.carVersionFeatures[6].value === option}
                    onChange={() => handleFeatureChange(7, option)}
                  />
                  <span> {option.charAt(0).toUpperCase() + option.slice(1)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vehicle Stability Control */}
          <div>
            <p className="p-2 font-bold">Vehicle Stability Control:</p>
            <div className="flex gap-4 p-2">
              {['yes', 'no'].map((option) => (
                <div key={option}>
                  <input
                    type="radio"
                    value={option}
                    name="stability"
                    id={`stability-${option}`}
                    checked={carDataTable.carVersionFeatures[7].value === option}
                    onChange={() => handleFeatureChange(8, option)}
                  />
                  <span> {option.charAt(0).toUpperCase() + option.slice(1)}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Child Lock */}
          <div>
            <p className="p-2 font-bold">Child Lock:</p>
            <div className="flex gap-4 p-2">
              {['yes', 'no'].map((option) => (
                <div key={option}>
                  <input
                    type="radio"
                    value={option}
                    name="child_lock"
                    id={`child_lock-${option}`}
                    checked={carDataTable.carVersionFeatures[8].value === option}
                    onChange={() => handleFeatureChange(9, option)}
                  />
                  <span> {option.charAt(0).toUpperCase() + option.slice(1)}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="p-2 font-bold">ISOFIX Child Seat Anchor:</p>
            <div className="flex gap-4 p-2">
              {['yes', 'no'].map((option) => (
                <div key={option}>
                  <input
                    type="radio"
                    value={option}
                    name="ISOFIX _child_seat_anchor"
                    id={`ISOFIX _child_seat_anchor-${option}`}
                    checked={carDataTable.carVersionFeatures[9].value === option}
                    onChange={() => handleFeatureChange(10, option)}
                  />
                  <span> {option.charAt(0).toUpperCase() + option.slice(1)}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
        {/* exterior */}
        <div className="p-4">
      <button
        onClick={() => setExteriorAccordian(!exteriorAccordian)}
        className="flex bg-slate-300 p-2 font-bold text-lg rounded mb-2 w-[100%] justify-between"
      >
        <span>Exterior</span>
        {exteriorAccordian ? (
          <MdExpandLess className="font-bold text-lg" />
        ) : (
          <MdExpandMore className="text-lg" />
        )}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-500 ${
          exteriorAccordian ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="grid gap-4">
            {/* <p className=""></p> */}
            {/* <input
              placeholder="Enter in English"
              className="border p-2 w-3/4 col-span-1"
              value={carDataTable.carVersionFeatures[12].value}
              onChange={(e) => handleFeatureChange(13, e.target.value)}
            /> */}
             <select /* value={carDataTable.carVersionFeatures[32].value} */ onChange={(e) => handleFeatureChange(13, e.target.value)} id="33" className="m-auto w-[45%] border-blue-300 border p-2 rounded">
                <option disabled  selected={!carDataTable?.carVersionFeatures[12]?.value?.length}>Colored outside door handles</option>
                <option value={"Body-Colored"}>Body-Colored</option>
                <option value={"Body-Colored with Chrome Lining"}>Body-Colored with Chrome Lining</option>
                <option value={"Chrome"}>Chrome</option>
                <option value={"Partial Chrome"}>Partial Chrome</option>
                <option value={"Black"}>Black</option>
                <option value={"Satin Finish"}>Satin Finish</option>
                <option value={"Gloss Finish"}>Gloss Finish</option>
                <option value={"Textured/Plastic"}>Textured/Plastic</option>
              </select>
            {/* <input
              placeholder="Enter in Arabic"
              className="border hidden p-2 w-3/4 col-span-1"
            /> */}
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="p-2 font-bold">Alloy wheels:</p>
              <div className="flex gap-4 p-2">
                <div>
                  <input
                    type="radio"
                    name="alloy_wheels"
                    id="alloy_yes"
                    checked={carDataTable.carVersionFeatures[10].value === "yes"}
                    onChange={() => handleFeatureChange(11, "yes")}
                  />
                  <span> Yes</span>
                </div>
                <div>
                  <input
                    type="radio"
                    name="alloy_wheels"
                    id="alloy_no"
                    checked={carDataTable.carVersionFeatures[10].value === "no"}
                    onChange={() => handleFeatureChange(11, "no")}
                  />
                  <span> No</span>
                </div>
              </div>
            </div>

            <div>
              <p className="p-2 font-bold">Front Fog lights:</p>
              <div className="flex gap-4 p-2">
                <div>
                  <input
                    type="radio"
                    name="frontfog"
                    id="frontfog_yes"
                    checked={carDataTable.carVersionFeatures[11].value === "yes"}
                    onChange={() => handleFeatureChange(12, "yes")}
                  />
                  <span> Yes</span>
                </div>
                <div>
                  <input
                    type="radio"
                    name="frontfog"
                    id="frontfog_no"
                    checked={carDataTable.carVersionFeatures[11].value === "no"}
                    onChange={() => handleFeatureChange(12, "no")}
                  />
                  <span> No</span>
                </div>
              </div>
            </div>

            <div>
              <p className="p-2 font-bold">Side mirrors with indicators:</p>
              <div className="flex gap-4 p-2">
                <div>
                  <input
                    type="radio"
                    name="sdwi"
                    id="sdwi_yes"
                    checked={carDataTable.carVersionFeatures[13].value === "yes"}
                    onChange={() => handleFeatureChange(14, "yes")}
                  />
                  <span> Yes</span>
                </div>
                <div>
                  <input
                    type="radio"
                    name="sdwi"
                    id="sdwi_no"
                    checked={carDataTable.carVersionFeatures[13].value === "no"}
                    onChange={() => handleFeatureChange(14, "no")}
                  />
                  <span> No</span>
                </div>
              </div>
            </div>

            <div>
              <p className="p-2 font-bold">Sun roof:</p>
              <div className="flex gap-4 p-2">
                <div>
                  <input
                    type="radio"
                    name="sun_roof"
                    id="sunroof_yes"
                    checked={carDataTable.carVersionFeatures[14].value === "yes"}
                    onChange={() => handleFeatureChange(15, "yes")}
                  />
                  <span> Yes</span>
                </div>
                <div>
                  <input
                    type="radio"
                    name="sun_roof"
                    id="sunroof_no"
                    checked={carDataTable.carVersionFeatures[14].value === "no"}
                    onChange={() => handleFeatureChange(15, "no")}
                  />
                  <span> No</span>
                </div>
              </div>
            </div>

            <div>
              <p className="p-2 font-bold">Moon roof:</p>
              <div className="flex gap-4 p-2">
                <div>
                  <input
                    type="radio"
                    name="moon_roof"
                    id="moonroof_yes"
                    checked={carDataTable.carVersionFeatures[15].value === "yes"}
                    onChange={() => handleFeatureChange(16, "yes")}
                  />
                  <span> Yes</span>
                </div>
                <div>
                  <input
                    type="radio"
                    name="moon_roof"
                    id="moonroof_no"
                    checked={carDataTable.carVersionFeatures[15].value === "no"}
                    onChange={() => handleFeatureChange(16, "no")}
                  />
                  <span> No</span>
                </div>
              </div>
            </div>

            <div>
              <p className="p-2 font-bold">Adjustable headlights:</p>
              <div className="flex gap-4 p-2">
                <div>
                  <input
                    type="radio"
                    name="headlights"
                    id="headlights_yes"
                    checked={carDataTable.carVersionFeatures[16].value === "yes"}
                    onChange={() => handleFeatureChange(17, "yes")}
                  />
                  <span> Yes</span>
                </div>
                <div>
                  <input
                    type="radio"
                    name="headlights"
                    id="headlights_no"
                    checked={carDataTable.carVersionFeatures[16].value === "no"}
                    onChange={() => handleFeatureChange(17, "no")}
                  />
                  <span> No</span>
                </div>
              </div>
            </div>

            <div>
              <p className="p-2 font-bold">DRLs:</p>
              <div className="flex gap-4 p-2">
                <div>
                  <input
                    type="radio"
                    name="drls"
                    id="drls_yes"
                    checked={carDataTable.carVersionFeatures[17].value === "yes"}
                    onChange={() => handleFeatureChange(18, "yes")}
                  />
                  <span> Yes</span>
                </div>
                <div>
                  <input
                    type="radio"
                    name="drls"
                    id="drls_no"
                    checked={carDataTable.carVersionFeatures[17].value === "no"}
                    onChange={() => handleFeatureChange(18, "no")}
                  />
                  <span> No</span>
                </div>
              </div>
            </div>

            <div>
              <p className="p-2 font-bold">Rear spoiler:</p>
              <div className="flex gap-4 p-2">
                <div>
                  <input
                    type="radio"
                    name="rear_spoiler"
                    id="rear_spoiler_yes"
                    checked={carDataTable.carVersionFeatures[18].value === "yes"}
                    onChange={() => handleFeatureChange(19, "yes")}
                  />
                  <span> Yes</span>
                </div>
                <div>
                  <input
                    type="radio"
                    name="rear_spoiler"
                    id="rear_spoiler_no"
                    checked={carDataTable.carVersionFeatures[18].value === "no"}
                    onChange={() => handleFeatureChange(19, "no")}
                  />
                  <span> No</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        {/* instrumentation */}
        <div>

      <div className="p-4">
        <button
          onClick={() => setInstrumentAccordian(!instrumentAccordian)}
          className="flex bg-slate-300 p-2 font-bold text-lg rounded mb-2 w-[100%] justify-between"
        >
          <span>Instrumentation</span>
          {instrumentAccordian ? (
            <MdExpandLess className="font-bold text-lg" />
          ) : (
            <MdExpandMore className="text-lg" />
          )}
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-500 ${
            instrumentAccordian ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="grid grid-cols-2 overflow-hidden">
            <div>
              <p className="p-2 font-bold">Tachometer:</p>
              <div className="flex gap-4 p-2">
                <div>
                  <input
                    type="radio"
                    name="tachometer"
                    id="tachometer_yes"
                    checked={carDataTable.carVersionFeatures[19].value === "yes"}
                    onChange={() => handleFeatureChange(20, "yes")}
                  />
                  <span> Yes</span>
                </div>
                <div>
                  <input
                    type="radio"
                    name="tachometer"
                    id="tachometer_no"
                    checked={carDataTable.carVersionFeatures[19].value === "no"}
                    onChange={() => handleFeatureChange(20, "no")}
                  />
                  <span> No</span>
                </div>
              </div>
            </div>
            <div>
              <p className="p-2 font-bold">Multi info:</p>
              <div className="flex gap-4 p-2">
                <div>
                  <input
                    type="radio"
                    name="multi_info"
                    id="multi_info_yes"
                    checked={carDataTable.carVersionFeatures[20].value === "yes"}
                    onChange={() => handleFeatureChange(21, "yes")}
                  />
                  <span> Yes</span>
                </div>
                <div>
                  <input
                    type="radio"
                    name="multi_info"
                    id="multi_info_no"
                    checked={carDataTable.carVersionFeatures[20].value === "no"}
                    onChange={() => handleFeatureChange(21, "no")}
                  />
                  <span> No</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        {/* entertainment */}
        <div>
      <div className="p-4">
        <button
          onClick={() => setEntertainmentAccordian(!entertainmentAccordian)}
          className="flex bg-slate-300 p-2 font-bold text-lg rounded mb-2 w-[100%] justify-between"
        >
          <span>Entertainment</span>
          {entertainmentAccordian ? (
            <MdExpandLess className="font-bold text-lg" />
          ) : (
            <MdExpandMore className="text-lg" />
          )}
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-500 ${
            entertainmentAccordian ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            <div className="grid grid-cols-3 gap-4 items-center">
              <p className="p-2 font-bold">Display Size in:</p>
              <input
                placeholder="Enter in English"
                className="border p-2 w-3/4 col-span-1"
                value={carDataTable.carVersionFeatures[24].value}
                onChange={(e) => handleFeatureChange(25, e.target.value)}
              />
              <input
                placeholder="Enter in Arabic"
                className="border hidden p-2 w-3/4 col-span-1"
                // onChange={(e) => handleFeatureChange(25, e.target.value)}
              />
            </div>
            <div className="grid grid-cols-3">
              <div>
                <p className="p-2 font-bold">CD player:</p>
                <div className="flex gap-2 p-2">
                  <div>
                    <input
                      type="radio"
                      name="cd_player"
                      id="cd_yes"
                      checked={carDataTable.carVersionFeatures[21].value === "yes"}
                      onChange={() => handleFeatureChange(22, "yes")}
                    />
                    <span> Yes</span>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="cd_player"
                      id="cd_no"
                      checked={carDataTable.carVersionFeatures[21].value === "no"}
                      onChange={() => handleFeatureChange(22, "no")}
                    />
                    <span> No</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="p-2 font-bold">DVD player:</p>
                <div className="flex gap-2 p-2">
                  <div>
                    <input
                      type="radio"
                      name="dvd_player"
                      id="dvd_yes"
                      checked={carDataTable.carVersionFeatures[22].value === "yes"}
                      onChange={() => handleFeatureChange(23, "yes")}
                    />
                    <span> Yes</span>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="dvd_player"
                      id="dvd_no"
                      checked={carDataTable.carVersionFeatures[22].value === "no"}
                      onChange={() => handleFeatureChange(23, "no")}
                    />
                    <span> No</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="p-2 font-bold">USB and auxiliary cable:</p>
                <div className="flex gap-2 p-2">
                  <div>
                    <input
                      type="radio"
                      name="auxiliary_cable"
                      id="aux_yes"
                      checked={carDataTable.carVersionFeatures[23].value === "yes"}
                      onChange={() => handleFeatureChange(24, "yes")}
                    />
                    <span> Yes</span>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="auxiliary_cable"
                      id="aux_no"
                      checked={carDataTable.carVersionFeatures[23].value === "no"}
                      onChange={() => handleFeatureChange(24, "no")}
                    />
                    <span> No</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="p-2 font-bold">Front Speakers:</p>
                <div className="flex gap-2 p-2">
                  <div>
                    <input
                      type="radio"
                      name="frontSpeakers"
                      id="front_yes"
                      checked={carDataTable.carVersionFeatures[25].value === "yes"}
                      onChange={() => handleFeatureChange(26, "yes")}
                    />
                    <span> Yes</span>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="frontSpeakers"
                      id="front_no"
                      checked={carDataTable.carVersionFeatures[25].value === "no"}
                      onChange={() => handleFeatureChange(26, "no")}
                    />
                    <span> No</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="p-2 font-bold">Rear speakers:</p>
                <div className="flex gap-2 p-2">
                  <div>
                    <input
                      type="radio"
                      name="rear_speakers"
                      id="rear_yes"
                      checked={carDataTable.carVersionFeatures[26].value === "yes"}
                      onChange={() => handleFeatureChange(27, "yes")}
                    />
                    <span> Yes</span>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="rear_speakers"
                      id="rear_no"
                      checked={carDataTable.carVersionFeatures[26].value === "no"}
                      onChange={() => handleFeatureChange(27, "no")}
                    />
                    <span> No</span>
                  </div>
                </div>
              </div>
              <div>
                <p className="p-2 font-bold">Rear seat entertainment:</p>
                <div className="flex gap-2 p-2">
                  <div>
                    <input
                      type="radio"
                      name="rear_seat_entertainment"
                      id="rear_seat_yes"
                      checked={carDataTable.carVersionFeatures[27].value === "yes"}
                      onChange={() => handleFeatureChange(28, "yes")}
                    />
                    <span> Yes</span>
                  </div>
                  <div>
                    <input
                      type="radio"
                      name="rear_seat_entertainment"
                      id="rear_seat_no"
                      checked={carDataTable.carVersionFeatures[27].value === "no"}
                      onChange={() => handleFeatureChange(28, "no")}
                    />
                    <span> No</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        {/* comfort and convenience */}
        <div className="p-4">
          <button
            onClick={() => setcomfortAccordian(!comfortAccordian)}
            className="flex bg-slate-300 p-2 font-bold text-lg rounded mb-2 w-[100%] justify-between"
          >
            <span>Comfort & convenience</span>
            {comfortAccordian ? (
              <MdExpandLess className="font-bold text-lg" />
            ) : (
              <MdExpandMore className="text-lg" />
            )}
          </button>
          <div
            className={`grid overflow-hidden transition-all  duration-500 ${
              comfortAccordian ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <select /* value={carDataTable.carVersionFeatures[32].value} */ onChange={(e) => handleFeatureChange(33, e.target.value)} id="33" className="w-[30%] border-blue-300 border p-2 rounded">
                <option disabled  selected={!carDataTable?.carVersionFeatures[32]?.value?.length}>Key type</option>
                <option value={"Traditional Key"}>Traditional Key</option>
                <option value={"Manual Key"}>Manual Key</option>
                <option value={"Jack Knife with Keyless Entry"}>Jack Knife with Keyless Entry</option>
                <option value={"Remote Key (Key Fob)"}>Remote Key (Key Fob)</option>
                <option value={"Transponder Key"}>Transponder Key</option>
                <option value={"Smart Key (Keyless Entry and Start)"}>Smart Key (Keyless Entry and Start)</option>
                <option value={"Key Card"}>Key Card</option>
                <option value={"Digital Key"}>Digital Key</option>
                <option value={"Switchblade Key"}>Switchblade Key</option>
              </select>
              <select /* value={carDataTable.carVersionFeatures[57].value} */ onChange={(e) => handleFeatureChange(58, e.target.value)} id="58" className="w-[30%] ml-10 border-blue-300 border p-2 rounded ">
                <option  selected={!(carDataTable?.carVersionFeatures[57]?.value?.length > 0)} disabled>Handbrake</option>
                <option value={"Manual Handbrake"}>Manual Handbrake</option>
                <option value={"Foot-operated Handbrake"}>Foot-operated Handbrake</option>
                <option value={"Electronic Parking Brake (EPB)"}>Electronic Parking Brake (EPB)</option>
              </select>
              <select /* value={carDataTable.carVersionFeatures[54].value} */ onChange={(e) => handleFeatureChange(55, e.target.value)} id="55" className="w-[30%] ml-10 border-blue-300 border p-2 rounded">
                <option selected={!carDataTable?.carVersionFeatures[54]?.value?.length}  disabled>Seat Material Type</option>
                <option value={"Leather"}>Leather</option>
                <option value={"Leather with Manual Adjustment"}>Leather with Manual Adjustment</option>
                <option value={"Hi Grade Fabric with Manual Adjustment"}>Hi Grade Fabric with Manual Adjustment</option>
                <option value={"Black Leather with Manual Adjustment"}>Black Leather with Manual Adjustment</option>
                <option value={"Fabric"}>Fabric</option>
                <option value={"Fabric with Manual Adjustment"}>Fabric with Manual Adjustment</option>
                <option value={"Synthetic Leather"}>Synthetic Leather</option>
                <option value={"Synthetic Leather with Manual Adjustment"}>Synthetic Leather with Manual Adjustment</option>
                <option value={"Vinyl"}>Vinyl</option>
                <option value={"Vinyl with Manual Adjustment"}>Vinyl with Manual Adjustment</option>
                <option value={"Alcantara with Manual Adjustment"}>Alcantara with Manual Adjustment</option>
                <option value={"Mesh with Manual Adjustment"}>Mesh with Manual Adjustment</option>
              </select>
              <div className="grid grid-cols-3 gap-2">
              <div>
        <p className="p-2 font-bold">Rear headrest:</p>
        <div className="flex gap-2 p-2">
          <div>
            <input
              type="radio"
              name="rear_headrest"
              id="rear_headrest_side"
              checked={carDataTable.carVersionFeatures[52].value === "1"}
              onChange={() => handleFeatureChange(53, "1")}
            />
            <span> 1</span>
            {/* <span> Two side rear headrests</span> */}
          </div>
          <div>
            <input
              type="radio"
              name="rear_headrest"
              id="rear_headrest_center"
              checked={carDataTable.carVersionFeatures[52].value === "2"}
              onChange={() => handleFeatureChange(53, "2")}
            />
            <span> 2</span>
            {/* <span> One center rear headrest</span> */}
          </div>
          <div>
            <input
              type="radio"
              name="rear_headrest"
              id="rear_headrest_center"
              checked={carDataTable.carVersionFeatures[52].value === "3"}
              onChange={() => handleFeatureChange(53, "3")}
            />
            <span> 3</span>
            {/* <span> One center rear headrest</span> */}
          </div>
        </div>
      </div>

      <div>
        <p className="p-2 font-bold">Climate control:</p>
        <div className="flex gap-4 p-2">
          <div>
            <input
              type="radio"
              name="climate_control"
              id="climate_control_yes"
              checked={carDataTable.carVersionFeatures[29].value === "yes"}
              onChange={() => handleFeatureChange(30, "yes")}
            />
            <span> Yes</span>
          </div>
          <div>
            <input
              type="radio"
              name="climate_control"
              id="climate_control_no"
              checked={carDataTable.carVersionFeatures[29].value === "no"}
              onChange={() => handleFeatureChange(30, "no")}
            />
            <span> No</span>
          </div>
        </div>
      </div>

      <div>
        <p className="p-2 font-bold">Air conditioner:</p>
        <div className="flex gap-4 p-2">
          <div>
            <input
              type="radio"
              name="air_conditioner"
              id="air_conditioner_yes"
              checked={carDataTable.carVersionFeatures[28].value === "yes"}
              onChange={() => handleFeatureChange(29, "yes")}
            />
            <span> Yes</span>
          </div>
          <div>
            <input
              type="radio"
              name="air_conditioner"
              id="air_conditioner_no"
              checked={carDataTable.carVersionFeatures[28].value === "no"}
              onChange={() => handleFeatureChange(29, "no")}
            />
            <span> No</span>
          </div>
        </div>
      </div>

      <div>
        <p className="p-2 font-bold">Heater:</p>
        <div className="flex gap-4 p-2">
          <div>
            <input
              type="radio"
              name="heater"
              id="heater_yes"
              checked={carDataTable.carVersionFeatures[30].value === "yes"}
              onChange={() => handleFeatureChange(31, "yes")}
            />
            <span> Yes</span>
          </div>
          <div>
            <input
              type="radio"
              name="heater"
              id="heater_no"
              checked={carDataTable.carVersionFeatures[30].value === "no"}
              onChange={() => handleFeatureChange(31, "no")}
            />
            <span> No</span>
          </div>
        </div>
      </div>

      <div>
        <p className="p-2 font-bold">Defogger:</p>
        <div className="flex gap-4 p-2">
          <div>
            <input
              type="radio"
              name="defogger"
              id="defogger_yes"
              checked={carDataTable.carVersionFeatures[31].value === "yes"}
              onChange={() => handleFeatureChange(32, "yes")}
            />
            <span> Yes</span>
          </div>
          <div>
            <input
              type="radio"
              name="defogger"
              id="defogger_no"
              checked={carDataTable.carVersionFeatures[31].value === "no"}
              onChange={() => handleFeatureChange(32, "no")}
            />
            <span> No</span>
          </div>
        </div>
      </div>

      <div>
        <p className="p-2 font-bold">Keyless entry:</p>
        <div className="flex gap-4 p-2">
          <div>
            <input
              type="radio"
              name="keyless_entry"
              id="keyless_entry_yes"
              checked={carDataTable.carVersionFeatures[33].value === "yes"}
              onChange={() => handleFeatureChange(34, "yes")}
            />
            <span> Yes</span>
          </div>
          <div>
            <input
              type="radio"
              name="keyless_entry"
              id="keyless_entry_no"
              checked={carDataTable.carVersionFeatures[33].value === "no"}
              onChange={() => handleFeatureChange(34, "no")}
            />
            <span> No</span>
          </div>
        </div>
      </div>

      <div>
        <p className="p-2 font-bold">Push start:</p>
        <div className="flex gap-4 p-2">
          <div>
            <input
              type="radio"
              name="push_start"
              id="push_start_yes"
              checked={carDataTable.carVersionFeatures[34].value === "yes"}
              onChange={() => handleFeatureChange(35, "yes")}
            />
            <span> Yes</span>
          </div>
          <div>
            <input
              type="radio"
              name="push_start"
              id="push_start_no"
              checked={carDataTable.carVersionFeatures[34].value === "no"}
              onChange={() => handleFeatureChange(35, "no")}
            />
            <span> No</span>
          </div>
        </div>
      </div>

      <div>
        <p className="p-2 font-bold">Central locking:</p>
        <div className="flex gap-4 p-2">
          <div>
            <input
              type="radio"
              name="central_locking"
              id="central_locking_yes"
              checked={carDataTable.carVersionFeatures[35].value === "yes"}
              onChange={() => handleFeatureChange(36, "yes")}
            />
            <span> Yes</span>
          </div>
          <div>
            <input
              type="radio"
              name="central_locking"
              id="central_locking_no"
              checked={carDataTable.carVersionFeatures[35].value === "no"}
              onChange={() => handleFeatureChange(36, "no")}
            />
            <span> No</span>
          </div>
        </div>
      </div>

      <div>
        <p className="p-2 font-bold">Power door locks:</p>
        <div className="flex gap-4 p-2">
          <div>
            <input
              type="radio"
              name="power_door_locks"
              id="power_door_locks_yes"
              checked={carDataTable.carVersionFeatures[36].value === "yes"}
              onChange={() => handleFeatureChange(37, "yes")}
            />
            <span> Yes</span>
          </div>
          <div>
            <input
              type="radio"
              name="power_door_locks"
              id="power_door_locks_no"
              checked={carDataTable.carVersionFeatures[36].value === "no"}
              onChange={() => handleFeatureChange(37, "no")}
            />
            <span> No</span>
          </div>
        </div>
      </div>

      <div>
        <p className="p-2 font-bold">Power steering:</p>
        <div className="flex gap-4 p-2">
          <div>
            <input
              type="radio"
              name="power_steering"
              id="power_steering_yes"
              checked={carDataTable.carVersionFeatures[37].value === "yes"}
              onChange={() => handleFeatureChange(38, "yes")}
            />
            <span> Yes</span>
          </div>
          <div>
            <input
              type="radio"
              name="power_steering"
              id="power_steering_no"
              checked={carDataTable.carVersionFeatures[37].value === "no"}
              onChange={() => handleFeatureChange(38, "no")}
            />
            <span> No</span>
          </div>
        </div>
      </div>

      <div>
        <p className="p-2 font-bold">Power windows:</p>
        <div className="flex gap-4 p-2">
          <div>
            <input
              type="radio"
              name="power_windows"
              id="power_windows_yes"
              checked={carDataTable.carVersionFeatures[38].value === "yes"}
              onChange={() => handleFeatureChange(39, "yes")}
            />
            <span> Yes</span>
          </div>
          <div>
            <input
              type="radio"
              name="power_windows"
              id="power_windows_no"
              checked={carDataTable.carVersionFeatures[38].value === "no"}
              onChange={() => handleFeatureChange(39, "no")}
            />
            <span> No</span>
          </div>
        </div>
      </div>

      <div>
        <p className="p-2 font-bold">Power mirrors:</p>
        <div className="flex gap-4 p-2">
          <div>
            <input
              type="radio"
              name="power_mirrors"
              id="power_mirrors_yes"
              checked={carDataTable.carVersionFeatures[39].value === "yes"}
              onChange={() => handleFeatureChange(40, "yes")}
            />
            <span> Yes</span>
          </div>
          <div>
            <input
              type="radio"
              name="power_mirrors"
              id="power_mirrors_no"
              checked={carDataTable.carVersionFeatures[39].value === "no"}
              onChange={() => handleFeatureChange(40, "no")}
            />
            <span> No</span>
          </div>
        </div>
      </div>
                {/*  */}
                <div>
        <p className="p-2 font-bold">Power boot:</p>
        <div className="flex gap-4 p-2">
          <div>
            <input
              type="radio"
              name="power_boot"
              id="power_boot_yes"
              checked={carDataTable.carVersionFeatures[40].value === "yes"}
              onChange={() => handleFeatureChange(41, "yes")}
            />
            <span> Yes</span>
          </div>
          <div>
            <input
              type="radio"
              name="power_boot"
              id="power_boot_no"
              checked={carDataTable.carVersionFeatures[40].value === "no"}
              onChange={() => handleFeatureChange(41, "no")}
            />
            <span> No</span>
          </div>
        </div>
      </div>

      <div>
        <p className="p-2 font-bold">Steering adjustment:</p>
        <div className="flex gap-4 p-2">
          <div>
            <input
              type="radio"
              name="steering_adjustment"
              id="steering_adjustment_yes"
              checked={carDataTable.carVersionFeatures[41].value === "yes"}
              onChange={() => handleFeatureChange(42, "yes")}
            />
            <span> Yes</span>
          </div>
          <div>
            <input
              type="radio"
              name="steering_adjustment"
              id="steering_adjustment_no"
              checked={carDataTable.carVersionFeatures[41].value === "no"}
              onChange={() => handleFeatureChange(42, "no")}
            />
            <span> No</span>
          </div>
        </div>
      </div>

      <div>
        <p className="p-2 font-bold">Steering switches:</p>
        <div className="flex gap-4 p-2">
          <div>
            <input
              type="radio"
              name="steering_switches"
              id="steering_switches_yes"
              checked={carDataTable.carVersionFeatures[42].value === "yes"}
              onChange={() => handleFeatureChange(43, "yes")}
            />
            <span> Yes</span>
          </div>
          <div>
            <input
              type="radio"
              name="steering_switches"
              id="steering_switches_no"
              checked={carDataTable.carVersionFeatures[42].value === "no"}
              onChange={() => handleFeatureChange(43, "no")}
            />
            <span> No</span>
          </div>
        </div>
      </div>

      <div>
        <p className="p-2 font-bold">Cruise control:</p>
        <div className="flex gap-4 p-2">
          <div>
            <input
              type="radio"
              name="cruise_control"
              id="cruise_control_yes"
              checked={carDataTable.carVersionFeatures[43].value === "yes"}
              onChange={() => handleFeatureChange(44, "yes")}
            />
            <span> Yes</span>
          </div>
          <div>
            <input
              type="radio"
              name="cruise_control"
              id="cruise_control_no"
              checked={carDataTable.carVersionFeatures[43].value === "no"}
              onChange={() => handleFeatureChange(44, "no")}
            />
            <span> No</span>
          </div>
        </div>
      </div>

      <div>
        <p className="p-2 font-bold">Driving modes:</p>
        <div className="flex gap-4 p-2">
          <div>
            <input
              type="radio"
              name="driving_modes"
              id="driving_modes_yes"
              checked={carDataTable.carVersionFeatures[44].value === "yes"}
              onChange={() => handleFeatureChange(45, "yes")}
            />
            <span> Yes</span>
          </div>
          <div>
            <input
              type="radio"
              name="driving_modes"
              id="driving_modes_no"
              checked={carDataTable.carVersionFeatures[44].value === "no"}
              onChange={() => handleFeatureChange(45, "no")}
            />
            <span> No</span>
          </div>
        </div>
      </div>

      <div>
        <p className="p-2 font-bold">Navigation:</p>
        <div className="flex gap-4 p-2">
          <div>
            <input
              type="radio"
              name="navigation"
              id="navigation_yes"
              checked={carDataTable.carVersionFeatures[45].value === "yes"}
              onChange={() => handleFeatureChange(46, "yes")}
            />
            <span> Yes</span>
          </div>
          <div>
            <input
              type="radio"
              name="navigation"
              id="navigation_no"
              checked={carDataTable.carVersionFeatures[45].value === "no"}
              onChange={() => handleFeatureChange(46, "no")}
            />
            <span> No</span>
          </div>
        </div>
      </div>

      <div>
        <p className="p-2 font-bold">Optional navigation:</p>
        <div className="flex gap-4 p-2">
          <div>
            <input
              type="radio"
              name="optional_navigation"
              id="optional_navigation_yes"
              checked={carDataTable.carVersionFeatures[46].value === "yes"}
              onChange={() => handleFeatureChange(47, "yes")}
            />
            <span> Yes</span>
          </div>
          <div>
            <input
              type="radio"
              name="optional_navigation"
              id="optional_navigation_no"
              checked={carDataTable.carVersionFeatures[46].value === "no"}
              onChange={() => handleFeatureChange(47, "no")}
            />
            <span> No</span>
          </div>
        </div>
      </div>

      <div>
        <p className="p-2 font-bold">Front Camera:</p>
        <div className="flex gap-4 p-2">
          <div>
            <input
              type="radio"
              name="frontCamera"
              id="frontCamera_yes"
              checked={carDataTable.carVersionFeatures[47].value === "yes"}
              onChange={() => handleFeatureChange(48, "yes")}
            />
            <span> Yes</span>
          </div>
          <div>
            <input
              type="radio"
              name="frontCamera"
              id="frontCamera_no"
              checked={carDataTable.carVersionFeatures[47].value === "no"}
              onChange={() => handleFeatureChange(48, "no")}
            />
            <span> No</span>
          </div>
        </div>
      </div>

      <div>
        <p className="p-2 font-bold">Rear camera:</p>
        <div className="flex gap-4 p-2">
          <div>
            <input
              type="radio"
              name="rear_camera"
              id="rear_camera_yes"
              checked={carDataTable.carVersionFeatures[48].value === "yes"}
              onChange={() => handleFeatureChange(49, "yes")}
            />
            <span> Yes</span>
          </div>
          <div>
            <input
              type="radio"
              name="rear_camera"
              id="rear_camera_no"
              checked={carDataTable.carVersionFeatures[48].value === "no"}
              onChange={() => handleFeatureChange(49, "no")}
            />
            <span> No</span>
          </div>
        </div>
      </div>

      <div>
        <p className="p-2 font-bold">Rear central control:</p>
        <div className="flex gap-4 p-2">
          <div>
            <input
              type="radio"
              name="rear_central_control"
              id="rear_central_control_yes"
              checked={carDataTable.carVersionFeatures[49].value === "yes"}
              onChange={() => handleFeatureChange(50, "yes")}
            />
            <span> Yes</span>
          </div>
          <div>
            <input
              type="radio"
              name="rear_central_control"
              id="rear_central_control_no"
              checked={carDataTable.carVersionFeatures[49].value === "no"}
              onChange={() => handleFeatureChange(50, "no")}
            />
            <span> No</span>
          </div>
        </div>
      </div>
    {/* </div> */}
    <div>
        <p className="p-2 font-bold">Rear ac vents:</p>
        <div className="flex gap-4 p-2">
          <div>
            <input
              type="radio"
              name="rear_ac_vents"
              id="rear_ac_vents_yes"
              checked={carDataTable.carVersionFeatures[50].value === "yes"}
              onChange={() => handleFeatureChange(51, "yes")}
            />
            <span> Yes</span>
          </div>
          <div>
            <input
              type="radio"
              name="rear_ac_vents"
              id="rear_ac_vents_no"
              checked={carDataTable.carVersionFeatures[50].value === "no"}
              onChange={() => handleFeatureChange(51, "no")}
            />
            <span> No</span>
          </div>
        </div>
      </div>

      <div>
        <p className="p-2 font-bold">Rear folding seat:</p>
        <div className="flex gap-4 p-2">
          <div>
            <input
              type="radio"
              name="rear_folding_seat"
              id="rear_folding_seat_yes"
              checked={carDataTable.carVersionFeatures[51].value === "yes"}
              onChange={() => handleFeatureChange(52, "yes")}
            />
            <span> Yes</span>
          </div>
          <div>
            <input
              type="radio"
              name="rear_folding_seat"
              id="rear_folding_seat_no"
              checked={carDataTable.carVersionFeatures[51].value === "no"}
              onChange={() => handleFeatureChange(52, "no")}
            />
            <span> No</span>
          </div>
        </div>
      </div>

      <div>
        <p className="p-2 font-bold">Rear wiper:</p>
        <div className="flex gap-4 p-2">
          <div>
            <input
              type="radio"
              name="rear_wiper"
              id="rear_wiper_yes"
              checked={carDataTable.carVersionFeatures[53].value === "yes"}
              onChange={() => handleFeatureChange(54, "yes")}
            />
            <span> Yes</span>
          </div>
          <div>
            <input
              type="radio"
              name="rear_wiper"
              id="rear_wiper_no"
              checked={carDataTable.carVersionFeatures[53].value === "no"}
              onChange={() => handleFeatureChange(54, "no")}
            />
            <span> No</span>
          </div>
        </div>
      </div>

      <div>
        <p className="p-2 font-bold">Heated seats:</p>
        <div className="flex gap-4 p-2">
          <div>
            <input
              type="radio"
              name="heated_seats"
              id="heated_seats_yes"
              checked={carDataTable.carVersionFeatures[55].value === "yes"}
              onChange={() => handleFeatureChange(56, "yes")}
            />
            <span> Yes</span>
          </div>
          <div>
            <input
              type="radio"
              name="heated_seats"
              id="heated_seats_no"
              checked={carDataTable.carVersionFeatures[55].value === "no"}
              onChange={() => handleFeatureChange(56, "no")}
            />
            <span> No</span>
          </div>
        </div>
      </div>

      <div>
        <p className="p-2 font-bold">Arm rest:</p>
        <div className="flex gap-4 p-2">
          <div>
            <input
              type="radio"
              name="arm_rest"
              id="arm_rest_yes"
              checked={carDataTable.carVersionFeatures[56].value === "yes"}
              onChange={() => handleFeatureChange(57, "yes")}
            />
            <span> Yes</span>
          </div>
          <div>
            <input
              type="radio"
              name="arm_rest"
              id="arm_rest_no"
              checked={carDataTable.carVersionFeatures[56].value === "no"}
              onChange={() => handleFeatureChange(57, "no")}
            />
            <span> No</span>
          </div>
        </div>
      </div>

      <div>
        <p className="p-2 font-bold">Cup holders:</p>
        <div className="flex gap-4 p-2">
          <div>
            <input
              type="radio"
              name="cup_holders"
              id="cup_holders_yes"
              checked={carDataTable.carVersionFeatures[58].value === "yes"}
              onChange={() => handleFeatureChange(59, "yes")}
            />
            <span> Yes</span>
          </div>
          <div>
            <input
              type="radio"
              name="cup_holders"
              id="cup_holders_no"
              checked={carDataTable.carVersionFeatures[58].value === "no"}
              onChange={() => handleFeatureChange(59, "no")}
            />
            <span> No</span>
          </div>
        </div>
      </div>

      <div>
        <p className="p-2 font-bold">Cool box:</p>
        <div className="flex gap-4 p-2">
          <div>
            <input
              type="radio"
              name="cool_box"
              id="cool_box_yes"
              checked={carDataTable.carVersionFeatures[59].value === "yes"}
              onChange={() => handleFeatureChange(60, "yes")}
            />
            <span> Yes</span>
          </div>
          <div>
            <input
              type="radio"
              name="cool_box"
              id="cool_box_no"
              checked={carDataTable.carVersionFeatures[59].value === "no"}
              onChange={() => handleFeatureChange(60, "no")}
            />
            <span> No</span>
          </div>
        </div>
      </div>

      <div>
        <p className="p-2 font-bold">Interior lighting:</p>
        <div className="flex gap-4 p-2">
          <div>
            <input
              type="radio"
              name="interior_lighting"
              id="interior_lighting_yes"
              checked={carDataTable.carVersionFeatures[60].value === "yes"}
              onChange={() => handleFeatureChange(61, "yes")}
            />
            <span> Yes</span>
          </div>
          <div>
            <input
              type="radio"
              name="interior_lighting"
              id="interior_lighting_no"
              checked={carDataTable.carVersionFeatures[60].value === "no"}
              onChange={() => handleFeatureChange(61, "no")}
            />
            <span> No</span>
          </div>
        </div>
      </div>

      <div>
        <p className="p-2 font-bold">Front Power outlet:</p>
        <div className="flex gap-4 p-2">
          <div>
            <input
              type="radio"
              name="frontPower_outlet"
              id="frontPower_outlet_yes"
              checked={carDataTable.carVersionFeatures[61].value === "yes"}
              onChange={() => handleFeatureChange(62, "yes")}
            />
            <span> Yes</span>
          </div>
          <div>
            <input
              type="radio"
              name="frontPower_outlet"
              id="frontPower_outlet_no"
              checked={carDataTable.carVersionFeatures[61].value === "no"}
              onChange={() => handleFeatureChange(62, "no")}
            />
            <span> No</span>
          </div>
        </div>
      </div>

      <div>
        <p className="p-2 font-bold">Rear power outlet:</p>
        <div className="flex gap-4 p-2">
          <div>
            <input
              type="radio"
              name="rear_power_outlet"
              id="rear_power_outlet_yes"
              checked={carDataTable.carVersionFeatures[62].value === "yes"}
              onChange={() => handleFeatureChange(63, "yes")}
            />
            <span> Yes</span>
          </div>
          <div>
            <input
              type="radio"
              name="rear_power_outlet"
              id="rear_power_outlet_no"
              checked={carDataTable.carVersionFeatures[62].value === "no"}
              onChange={() => handleFeatureChange(63, "no")}
            />
            <span> No</span>
          </div>
        </div>
      </div>
       <div>
        <p className="p-2 font-bold">FM/AM Radio:</p>
        <div className="flex gap-4 p-2">
          <div>
            <input
              type="radio"
              name="fm/am"
              id="fm/am_yes"
              checked={carDataTable.carVersionFeatures[63].value === "yes"}
              onChange={() => handleFeatureChange(64, "yes")}
            />
            <span> Yes</span>
          </div>
          <div>
            <input
              type="radio"
              name="fm/am"
              id="fm/am_no"
              checked={carDataTable.carVersionFeatures[63].value === "no"}
              onChange={() => handleFeatureChange(64, "no")}
            />
            <span> No</span>
          </div>
        </div>
      </div>
      <div>
        <p className="p-2 font-bold">Cassette Player:</p>
        <div className="flex gap-4 p-2">
          <div>
            <input
              type="radio"
              name="casset_player"
              id="casset_player_yes"
              checked={carDataTable.carVersionFeatures[64].value === "yes"}
              onChange={() => handleFeatureChange(65, "yes")}
            />
            <span> Yes</span>
          </div>
          <div>
            <input
              type="radio"
              name="casset_player"
              id="casset_player_no"
              checked={carDataTable.carVersionFeatures[64].value === "no"}
              onChange={() => handleFeatureChange(65, "no")}
            />
            <span> No</span>
          </div>
        </div>
      </div> 
              </div>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col mt-10 ml-2 items-center justify-center">
          <label htmlFor="file-upload" className="font-bold">
            Add Photos
          </label>
          <br />
          <input className="mt-2" id="file-upload" type="file" />
        </div> */}
        {/* <br /><br /> */}
        <div className="w-full grid place-items-center ">
        <button disabled={loading} onClick={handleSendAllData} className="disabled:bg-[#1876D6]/70 rounded-md px-[14px] py-[5px] mb-[20px] ml-[45%] lato-bold text-white bg-[#1876D6]/100 m-auto"> {loading ? <div className="animate-spin rounded-full h-4 w-4 my-1 border-t-2 border-b-2 border-white mx-4"></div> : "Submit"}  </button>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
      {/* <div> */}
      <h1>Currency Converter</h1>
      <CurrencyConverter priceInRupees={priceInRupees} />
    </div>
          {/* </div> */}
    </div>
  
  {/* <Routes>
    <Route path="/search" element={<SearchCar />} />
  </Routes> */}
      </>
  );
}

export default App;


const CurrencyConverter = ({ priceInRupees }) => {
  const [exchangeRate, setExchangeRate] = useState(null);
  const [priceInDirhams, setPriceInDirhams] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/PKR'); // Use your API endpoint here
        const data = await response.json();
        setExchangeRate(data.rates.AED); // Assuming the API returns rates in this structure
      } catch (err) {
        setError('Error fetching exchange rate');
      }
    };

    fetchExchangeRate();
  }, []);

  useEffect(() => {
    if (exchangeRate) {
      setPriceInDirhams((priceInRupees * exchangeRate));
    }
  }, [exchangeRate, priceInRupees]);

  // if (error) {
  //   return <div>{error}</div>;
  // }
  const [currency, setCurrency] = useState('');
  const [country, setCountry] = useState('');
  // const [error, setError] = useState('');

  useEffect(() => {
    const getLocationAndCurrency = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            // Use a reverse geocoding API to get the country
            try {
              const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
              const data = await response.json();
              console.log(data,"data here")
              const countryName = data.countryName;
              setCountry(countryName);

              // Example mapping of country to currency
              const countryCurrencyMap = {
                'Pakistan': 'PKR',
                'United Arab Emirates': 'AED',
                'Netherlands Antilles': 'ANG',
                'Germany': 'EUR', // Added Germany and its currency
                // Add more countries and currencies as needed
              };

              setCurrency(countryCurrencyMap[countryName] || 'Currency not found');
            } catch (err) {
              setError('Error fetching country information');
            }
          },
          (error) => {
            setError('Error getting location');
          }
        );
      } else {
        setError('Geolocation is not supported by this browser.');
      }
    };

    getLocationAndCurrency();
  }, []);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        const response = await axios.get('https://api.ipify.org?format=json');   
console.log(response)
        setUserLocation(response.data.ip);
      } catch (error) {
        console.error('Error fetching user location:', error);
        // Handle error gracefully, e.g., show a message to the user
      }
    };

    fetchUserLocation();
  }, []);
  return (
    <div>
      <h2>Price in PKR: {priceInRupees} PKR</h2>
      {priceInDirhams && <h2>Price in AED: {priceInDirhams} AED</h2>}
      <div>
      <h2>Country: {country}</h2>
      <h2>Currency: {currency}</h2>
    </div>
    <div>
      {userLocation ? (
        <p>Your IP address is: {userLocation}</p>
      ) : (
        <p>Fetching user location...</p>
      )}
    </div>
    </div>
  );
};