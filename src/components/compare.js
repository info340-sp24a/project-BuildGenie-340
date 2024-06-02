import React, { useEffect, useState } from 'react';
// import { Navbar } from './navbar';
import { Footer } from './footer';
import { getDatabase, ref, get, child} from 'firebase/database';

// const presetBuilds = [
//     {
//         name: "Build 1",
//         cpu: { name: "Intel Core i9-11900K", price: 539.99 },
//         gpu: { name: "NVIDIA GeForce RTX 3080", price: 699.99 },
//         ram: { name: "32GB DDR4", price: 159.99 },
//         cpu_cooler: { name: "Deepcool AK620", price: 54.99 },
//         monitor: { name: "MSI G272QPF", price: 199.00 },
//         case: { name: "Lian Li O11D XL-X", price: 222.99 },
//         storage: { name: "1TB NVMe SSD", price: 119.99 },
//         motherboard: { name: "ASUS ROG STRIX Z590-E", price: 379.99 }
//     },
//     {
//         name: "Build 2",
//         cpu: { name: "AMD Ryzen 9 5900X", price: 499.99 },
//         gpu: { name: "AMD Radeon RX 6800 XT", price: 649.99 },
//         ram: { name: "32GB DDR4", price: 159.99 },
//         cpu_cooler: { name: "NZXT Kraken 240 RGB", price: 160.99 },
//         monitor: { name: "Asus TUF Gaming VG27AQ", price: 309.00 },
//         case: { name: "Deepcool CH510", price: 112.70 },
//         storage: { name: "1TB NVMe SSD", price: 119.99 },
//         motherboard: { name: "MSI MPG B550 GAMING EDGE WIFI", price: 179.99 }
//     },
//     {
//         name: "Build 3",
//         cpu: { name: "Intel Core i7-11700K", price: 399.99 },
//         gpu: { name: "NVIDIA GeForce RTX 3070", price: 499.99 },
//         ram: { name: "16GB DDR4", price: 79.99 },
//         cpu_cooler: { name: "Deepcool AK400", price: 31.99 },
//         monitor: { name: "KOORUI 24E3", price: 119.99 },
//         case: { name: "Fractal Design Meshify 2", price: 169.73 },
//         storage: { name: "512GB NVMe SSD", price: 59.99 },
//         motherboard: { name: "Gigabyte Z590 AORUS ELITE", price: 229.99 }
//     },
//     {
//         name: "Build 4",
//         cpu: { name: "AMD Ryzen 7 5800X", price: 449.99 },
//         gpu: { name: "AMD Radeon RX 6700 XT", price: 479.99 },
//         ram: { name: "16GB DDR4", price: 79.99 },
//         cpu_cooler: { name: "ARCTIC Liquid Freezer II 280", price: 95.99 },
//         monitor: { name: "AOC C27G2Z", price: 178.99 },
//         case: { name: "Lian Li LANCOOL III", price: 134.99 },
//         storage: { name: "1TB SATA SSD", price: 69.99 },
//         motherboard: { name: "ASUS TUF Gaming B550-PLUS", price: 159.99 }
//     }
// ];

const presetBuilds = [
    {
        name: "Preset 1",
        parts: {
            "mother_board": { Component: "motherboard", name: "Asus ROG STRIX B650-A GAMING WIFI", price: 259.99, type: "" },
            "led_controller": { Component: "case-accessory", name: "NZXT Hue", price: 2.95, type: "LED Controller" }
        }
    },
    {
        name: "Preset 2",
        parts: {
            "mother": { Component: "motherboard", name: "Asus ROG STRIX B650-A GAMING WIFI", price: 259.99, type: "" },
            "led": { Component: "case-accessory", name: "NZXT Hue", price: 29.05, type: "LED Controller" }
        }
    }
    // Add other preset builds similarly if needed...
];

export function ComparePage(props) {
    const [build1, setBuild1] = useState(presetBuilds[0]);
    const [build2, setBuild2] = useState(presetBuilds[1]);
    const [userBuilds, setUserBuilds] = useState([]);
    const db = getDatabase();

    // const handleSelectBuild1 = (event) => {
    //     const selectedBuild = [...presetBuilds, ...userBuilds].find(build => build.name === event.target.value);
    //     setBuild1(selectedBuild);
    // };

    // const handleSelectBuild2 = (event) => {
    //     const selectedBuild = [...presetBuilds, ...userBuilds].find(build => build.name === event.target.value);
    //     setBuild2(selectedBuild);
    // };

    const handleSelectBuild1 = (event) => {
        const buildName = event.target.value;
        const selectedBuild = [...presetBuilds, ...userBuilds].find(build => build.name === buildName);
        console.log("Selected Build 1:", selectedBuild);
        setBuild1(selectedBuild);
    };
    
    const handleSelectBuild2 = (event) => {
        const buildName = event.target.value;
        const selectedBuild = [...presetBuilds, ...userBuilds].find(build => build.name === buildName);
        console.log("Selected Build 2:", selectedBuild);
        setBuild2(selectedBuild);
    };

    const calcTotalPrice = (build) => {
        if (!build || !build.parts) return "0.00";
        return Object.values(build.parts)
            .filter(part => part && part.price) // Ensure part and part.price are defined
            .reduce((total, part) => total + (part.price || 0), 0) // Handle undefined price
            .toFixed(2);
    };

    // useEffect(() => {
    //     const fetchUserBuilds = async () => {
    //         const dbRef = ref(db);
    //         try {
    //             const snapshot = await get(child(dbRef, 'build'));
    //             if (snapshot.exists()) {
    //                 const builds = snapshot.val();
    //                 console.log(builds);
    //                 const structuredBuilds = Object.keys(builds).map(key => ({
    //                     name: key,
    //                     parts: builds[key]
    //                 }));
    //                 setUserBuilds(structuredBuilds);
    //                 console.log(structuredBuilds);
    //             } else {
    //                 console.log("No user builds available");
    //             }
    //         } catch (error) {
    //             console.error("Error fetching user builds: ", error);
    //         }
    //     };

    //     fetchUserBuilds();
    // }, [db]);

    useEffect(() => {
        const fetchUserBuilds = async () => {
            const dbRef = ref(db);
            try {
                const snapshot = await get(child(dbRef, 'build'));
                if (snapshot.exists()) {
                    const builds = snapshot.val();
                    console.log(builds);
    
                    // Aggregating all parts under one main buikd
                    const userBuild = {
                        name: "User Build", // placeholder name
                        parts: builds
                    };
    
                    setUserBuilds([userBuild]);
                    console.log(userBuild);
                } else {
                    console.log("No user builds available");
                }
            } catch (error) {
                console.error("Error fetching user builds: ", error);
            }
        };
    
        fetchUserBuilds();
    }, [db]);

    

    return (
        <div>
            {/* <Navbar /> */}
            <div className="compare-box">
                <div className="comparison-tables">
                    <div className="build-table">
                        <h2>Select Your Build</h2>
                        <select onChange={handleSelectBuild1} value={build1.name}>
                            {[...presetBuilds, ...userBuilds].map(build => (
                                <option key={build.name} value={build.name}>{build.name}</option>
                            ))}
                        </select>
                        <table>
                            <tbody>
                                {Object.keys(build1.parts).map((key) => (
                                    <tr key={key}>
                                        <td>{build1.parts[key].Component.toUpperCase()}</td>
                                        <td>{build1.parts[key].name} (${build1.parts[key].price})</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <h3>Total Price: ${calcTotalPrice(build1)}</h3>
                    </div>
                    {build2 && (
                        <div className="build-table">
                            <h2>Select Comparison Build</h2>
                            <select onChange={handleSelectBuild2} value={build2.name}>
                                {[...presetBuilds, ...userBuilds].map(build => (
                                    <option key={build.name} value={build.name}>{build.name}</option>
                                ))}
                            </select>
                            <table>
                                <tbody>
                                    {Object.keys(build2.parts).map((key) => (
                                        <tr key={key}>
                                            <td>{build2.parts[key].Component.toUpperCase()}</td>
                                            <td>{build2.parts[key].name} (${build2.parts[key].price})</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <h3>Total Price: ${calcTotalPrice(build2)}</h3>
                        </div>
                    )}
                </div>
            </div>
            
            <Footer />
        </div>
    )
}

// export function ComparePage(props) {
//     const [builds, setBuilds] = useState([]);
//     const [selectedBuild1, setSelectedBuild1] = useState(null);
//     const [selectedBuild2, setSelectedBuild2] = useState(null);
//     const [parts1, setParts1] = useState(null);
//     const [parts2, setParts2] = useState(null);
//     const db = getDatabase();

//     useEffect(() => {
//         const fetchBuilds = async () => {
//             const dbRef = ref(db);
//             try {
//                 const snapshot = await get(child(dbRef, 'build'));
//                 if (snapshot.exists()) {
//                     const buildsData = snapshot.val();
//                     console.log(buildsData);
//                     const structuredBuilds = Object.entries(buildsData).map(([buildName, parts]) => ({
//                         name: buildName,
//                         parts: parts
//                     }));
//                     setBuilds(structuredBuilds);
//                 } else {
//                     console.log("No builds available");
//                 }
//             } catch (error) {
//                 console.error("Error fetching builds: ", error);
//             }
//         };

//         fetchBuilds();
//     }, [db]);

//     const handleSelectBuild1 = (event) => {
//         const buildName = event.target.value;
//         const selectedBuild = builds.find(build => build.name === buildName);
//         setSelectedBuild1(buildName);
//         setParts1(selectedBuild.parts);
//     };

//     const handleSelectBuild2 = (event) => {
//         const buildName = event.target.value;
//         const selectedBuild = builds.find(build => build.name === buildName);
//         setSelectedBuild2(buildName);
//         setParts2(selectedBuild.parts);
//     };

//     return (
//         <div>
//             <Navbar />
//             <div className="comparison-tables">
//                 <div className="build-table">
//                     <h2>Select Build 1</h2>
//                     <select onChange={handleSelectBuild1} value={selectedBuild1}>
//                         {builds.map(build => (
//                             <option key={build.name} value={build.name}>{build.name}</option>
//                         ))}
//                     </select>
//                     {parts1 && (
//                         <table>
//                             <tbody>
//                                 {Object.keys(parts1).map((partKey) => (
//                                     <tr key={partKey}>
//                                         <td>{parts1[partKey].Component ? parts1[partKey].Component.toUpperCase() : ""}</td>
//                                         <td>{parts1[partKey].name} (${parts1[partKey].price})</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     )}
//                 </div>
//                 <div className="build-table">
//                     <h2>Select Build 2</h2>
//                     <select onChange={handleSelectBuild2} value={selectedBuild2}>
//                         {builds.map(build => (
//                             <option key={build.name} value={build.name}>{build.name}</option>
//                         ))}
//                     </select>
//                     {parts2 && (
//                         <table>
//                             <tbody>
//                                 {Object.keys(parts2).map((partKey) => (
//                                     <tr key={partKey}>
//                                         <td>{parts2[partKey].Component ? parts2[partKey].Component.toUpperCase() : ""}</td>
//                                         <td>{parts2[partKey].name} (${parts2[partKey].price})</td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     )}
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// }