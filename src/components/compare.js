import React, { useState } from 'react';
import { Footer } from './footer';

const builds = [
    {
        name: "Build 1",
        cpu: { name: "Intel Core i9-11900K", price: 539.99 },
        gpu: { name: "NVIDIA GeForce RTX 3080", price: 699.99 },
        ram: { name: "32GB DDR4", price: 159.99 },
        cpu_cooler: { name: "Deepcool AK620", price: 54.99 },
        monitor: { name: "MSI G272QPF", price: 199.00 },
        case: { name: "Lian Li O11D XL-X", price: 222.99 },
        storage: { name: "1TB NVMe SSD", price: 119.99 },
        motherboard: { name: "ASUS ROG STRIX Z590-E", price: 379.99 }
    },
    {
        name: "Build 2",
        cpu: { name: "AMD Ryzen 9 5900X", price: 499.99 },
        gpu: { name: "AMD Radeon RX 6800 XT", price: 649.99 },
        ram: { name: "32GB DDR4", price: 159.99 },
        cpu_cooler: { name: "NZXT Kraken 240 RGB", price: 160.99 },
        monitor: { name: "Asus TUF Gaming VG27AQ", price: 309.00 },
        case: { name: "Deepcool CH510", price: 112.70 },
        storage: { name: "1TB NVMe SSD", price: 119.99 },
        motherboard: { name: "MSI MPG B550 GAMING EDGE WIFI", price: 179.99 }
    },
    {
        name: "Build 3",
        cpu: { name: "Intel Core i7-11700K", price: 399.99 },
        gpu: { name: "NVIDIA GeForce RTX 3070", price: 499.99 },
        ram: { name: "16GB DDR4", price: 79.99 },
        cpu_cooler: { name: "Deepcool AK400", price: 31.99 },
        monitor: { name: "KOORUI 24E3", price: 119.99 },
        case: { name: "Fractal Design Meshify 2", price: 169.73 },
        storage: { name: "512GB NVMe SSD", price: 59.99 },
        motherboard: { name: "Gigabyte Z590 AORUS ELITE", price: 229.99 }
    },
    {
        name: "Build 4",
        cpu: { name: "AMD Ryzen 7 5800X", price: 449.99 },
        gpu: { name: "AMD Radeon RX 6700 XT", price: 479.99 },
        ram: { name: "16GB DDR4", price: 79.99 },
        cpu_cooler: { name: "ARCTIC Liquid Freezer II 280", price: 95.99 },
        monitor: { name: "AOC C27G2Z", price: 178.99 },
        case: { name: "Lian Li LANCOOL III", price: 134.99 },
        storage: { name: "1TB SATA SSD", price: 69.99 },
        motherboard: { name: "ASUS TUF Gaming B550-PLUS", price: 159.99 }
    }
];


export function ComparePage(props) {
    const [build1, setBuild1] = useState(builds[0]);
    const [build2, setBuild2] = useState(builds[1]);

    const handleSelectBuild1 = (event) => {
        const selectedBuild = builds.find(build => build.name === event.target.value);
        setBuild1(selectedBuild);
    };

    const handleSelectBuild2 = (event) => {
        const selectedBuild = builds.find(build => build.name === event.target.value);
        setBuild2(selectedBuild);
    };

    const calcTotalPrice = (build) => {
        return (build.cpu.price + build.gpu.price + build.ram.price + build.cpu_cooler.price + build.monitor.price + build.case.price + build.storage.price + build.motherboard.price).toFixed(2);
    };

    return (
        <div>
            <div className="comparison-tables">
                <div className="build-table">
                    <h2>Select Your Build</h2>
                    <select onChange={handleSelectBuild1} value={build1.name}>
                        {builds.map(build => (
                            <option key={build.name} value={build.name}>{build.name}</option>
                        ))}
                    </select>
                    <table>
                        <tbody>
                            <tr>
                                <td>CPU</td>
                                <td>{build1.cpu.name} (${build1.cpu.price})</td>
                            </tr>
                            <tr>
                                <td>GPU</td>
                                <td>{build1.gpu.name} (${build1.gpu.price})</td>
                            </tr>
                            <tr>
                                <td>RAM</td>
                                <td>{build1.ram.name} (${build1.ram.price})</td>
                            </tr>
                            <tr>
                                <td>CPU-COOLER</td>
                                <td>{build1.cpu_cooler.name} (${build1.cpu_cooler.price})</td>
                            </tr>
                            <tr>
                                <td>MONITOR</td>
                                <td>{build1.monitor.name} (${build1.monitor.price})</td>
                            </tr>
                            <tr>
                                <td>CASE</td>
                                <td>{build1.case.name} (${build1.case.price})</td>
                            </tr>
                            <tr>
                                <td>Storage</td>
                                <td>{build1.storage.name} (${build1.storage.price})</td>
                            </tr>
                            <tr>
                                <td>Motherboard</td>
                                <td>{build1.motherboard.name} (${build1.motherboard.price})</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3>Total Price: ${calcTotalPrice(build1)}</h3>
                </div>
                <div className="build-table">
                    <h2>Select Comparison Build</h2>
                    <select onChange={handleSelectBuild2} value={build2.name}>
                        {builds.map(build => (
                            <option key={build.name} value={build.name}>{build.name}</option>
                        ))}
                    </select>
                    <table>
                        <tbody>
                            <tr>
                                <td>CPU</td>
                                <td>{build2.cpu.name} (${build2.cpu.price})</td>
                            </tr>
                            <tr>
                                <td>GPU</td>
                                <td>{build2.gpu.name} (${build2.gpu.price})</td>
                            </tr>
                            <tr>
                                <td>RAM</td>
                                <td>{build2.ram.name} (${build2.ram.price})</td>
                            </tr>
                            <tr>
                                <td>CPU-COOLER</td>
                                <td>{build2.cpu_cooler.name} (${build2.cpu_cooler.price})</td>
                            </tr>
                            <tr>
                                <td>MONITOR</td>
                                <td>{build2.monitor.name} (${build2.monitor.price})</td>
                            </tr>
                            <tr>
                                <td>CASE</td>
                                <td>{build2.case.name} (${build2.case.price})</td>
                            </tr>
                            <tr>
                                <td>Storage</td>
                                <td>{build2.storage.name} (${build2.storage.price})</td>
                            </tr>
                            <tr>
                                <td>Motherboard</td>
                                <td>{build2.motherboard.name} (${build2.motherboard.price})</td>
                            </tr>
                        </tbody>
                    </table>
                    <h3>Total Price: ${calcTotalPrice(build2)}</h3>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
