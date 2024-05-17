import React from "react";

export function PCPart(props) {
    return (
        <tbody>
            <tr className="item">
                <th scope="row" className="component">Motherboard</th>
                <td className="product">
                    <img src="./img/MSI Z690-A.jpg" alt={"placeholder"} />
                </td>
                <td className="Title">MSI PRO Z690-A WIFI ATX LGA1700 Motherboard</td>
                <td className="Price">$148.40</td>
                <td className="Link">
                    <a href="https://www.amazon.com/MSI-Z690-ProSeries-Motherboard-Socket/dp/B09KKYXXQB/ref=sr_1_1?crid=2OLUUCRDW4TG4&dib=eyJ2IjoiMSJ9.t1iSFYiD447K5CmBxxTCc9g50cnNIVEYb6qga3RgP4kstei_Qha3LLatC86aG4UU5rb-grNE7OJB1jGyKsDAOuOlKdNvbeSCNuoK66s45g4CSGIXxNyYf_o6b4KB8QnL7kIMoSrzlM7xq7TSe_gmS3AeoDKsC1rJov_Cva3pnRsOPMNzNuVLR8H6f35xjpwtKzIDS2naswaY6z-jZqdtBWMglIB-zSbVhDO_QXUI9yc5a2U75rReSmqmEE4dAeAvBKtdbdO5UCGK5OA4RtWyFdOXmAO6maxylFWcy5o-Ps0.24T8cP2hQszimlpIlgUPtpXtGUXwi9ANk1dmHvL2IsY&dib_tag=se&keywords=MSI+PRO+Z690-A+WiFi+ProSeries+Motherboard+%28ATX%2C+12th+Gen+Intel+Core%2C+LGA+1700+Socket%2C+DDR5%2C+PCIe+5%2C+2.5G+LAN%2C+M.2+Slots%2C+Wi-Fi+6E%29&qid=1713699733&s=electronics&sprefix=msi+pro+z690-a+wifi+proseries+motherboard+atx%2C+12th+gen+intel+core%2C+lga+1700+socket%2C+ddr5%2C+pcie+5%2C+2.5g+lan%2C+m.2+slots%2C+wi-fi+6e+%2Celectronics%2C140&sr=1-1">
                        Buy Now
                    </a>
                </td>
                <td className="Remove">
                    <button className="fa fa-trash"></button>
                </td>
            </tr>
        </tbody>
    )
}