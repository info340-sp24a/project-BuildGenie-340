import React, { useEffect, useState } from 'react';
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

export function ComparePage({ currUser }) {
    const [builds, setBuilds] = useState(presetBuilds);
    const [selectedBuild1, setSelectedBuild1] = useState('');
    const [selectedBuild2, setSelectedBuild2] = useState('');
    const [parts1, setParts1] = useState(null);
    const [parts2, setParts2] = useState(null);
    const db = getDatabase();

    useEffect(() => {
        const fetchBuilds = async () => {
            const dbRef = ref(db);
            try {
                const snapshot = await get(child(dbRef, `builds/${currUser.uid}`));
                if (snapshot.exists()) {
                    const userBuildsData = snapshot.val();
                    const structuredUserBuilds = {
                        name: "Your Build",
                        parts: userBuildsData
                    };

                    console.log('Fetched user build:', structuredUserBuilds);
                    setBuilds([...presetBuilds, structuredUserBuilds]);
                } else {
                    console.log("No user builds available");
                }
            } catch (error) {
                console.error("Error fetching builds: ", error);
            }
        };

        fetchBuilds();
    }, [db, currUser.uid]);

    const handleSelectBuild1 = (event) => {
        const buildName = event.target.value;
        const selectedBuild = builds.find(build => build.name === buildName);
        setSelectedBuild1(buildName);
        setParts1(selectedBuild.parts);
        console.log('Selected Build 1:', selectedBuild);
    };

    const handleSelectBuild2 = (event) => {
        const buildName = event.target.value;
        const selectedBuild = builds.find(build => build.name === buildName);
        setSelectedBuild2(buildName);
        setParts2(selectedBuild.parts);
        console.log('Selected Build 2:', selectedBuild);
    };

    const calcTotalPrice = (parts) => {
        if (!parts) return "0.00";
        return Object.values(parts)
            .filter(part => part && part.price)
            .reduce((total, part) => total + (part.price || 0), 0) 
            .toFixed(2);
    };

    return (
        <div>
            <div className="comparison-tables">
                <div className="build-table">
                    <h2>Select Build 1</h2>
                    <select onChange={handleSelectBuild1} value={selectedBuild1}>
                        <option value="">Select a build</option>
                        {builds.map(build => (
                            <option key={build.name} value={build.name}>{build.name}</option>
                        ))}
                    </select>
                    {parts1 && (
                        <table>
                            <tbody>
                                {Object.keys(parts1).map((partKey) => (
                                    <tr key={partKey}>
                                        <td>{parts1[partKey].Component.toUpperCase()}</td>
                                        <td>{parts1[partKey].name} (${parts1[partKey].price})</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                    <h3>Total Price: ${calcTotalPrice(parts1)}</h3>
                </div>
                <div className="build-table">
                    <h2>Select Build 2</h2>
                    <select onChange={handleSelectBuild2} value={selectedBuild2}>
                        <option value="">Select a build</option>
                        {builds.map(build => (
                            <option key={build.name} value={build.name}>{build.name}</option>
                        ))}
                    </select>
                    {parts2 && (
                        <table>
                            <tbody>
                                {Object.keys(parts2).map((partKey) => (
                                    <tr key={partKey}>
                                        <td>{parts2[partKey].Component.toUpperCase()}</td>
                                        <td>{parts2[partKey].name} (${parts2[partKey].price})</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                    <h3>Total Price: ${calcTotalPrice(parts2)}</h3>
                </div>
            </div>
            <Footer />
        </div>
    );
}