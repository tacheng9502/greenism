// Modules
import React from "react";

// Components
import HeroImageRight from "../components/HeroImageRight";
import HeroText from "../components/HeroText";
import Breadcrumb from "../components/Breadcrumb";
import Card from "../components/Card";
import ChartLine from "../components/ChartLine";

// Assets
import img_coralBleaching from "../assets/img/bleaching.jpg";
import img_bushFire from "../assets/img/fire.jpeg";
import img_sun from "../assets/img/sun.jpg";
import HeroImageLeft from "../components/HeroImageLeft";


class Why extends React.Component {
    render() {
        const bc_parent = "Green Roofs & Walls";
        const bc_child = "Why is this important to me?";
        const hir_title = "Since 1910, Australia's climate has warmed by more than 1°C"
        const hir_subtitle = "In fact, without action, Australia is expected to warm as much as 5 degrees Celsius by 2090. Simply put, Australia is already a hot and dry country and it’s expected to get hotter and drier without action on climate change."
        const c_title = "How is climate change affecting Australia?"
        const c_imgSize = "image is-4by3"

        const chartData_pie_1 = {
            labels: ["Agriculture", "Waste", "Industrial processes",
                "Fugitive emissions", "Transport", "Direct combusion",
                "Electricity generation"],
            datasets: [
                {
                    data: [13.5, 2.4, 3.4, 3.0, 20.6, 16.4, 50.9],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(26, 147, 111, 0.6)'
                    ]
                }
            ]
        }

        const chartData_pie_2 = {
            labels: ["Lighting", "Equipment", "Lifts", "Domestic Hot Water", "Other", "HVAC"],
            datasets: [
                {
                    data: [25, 22, 4, 1, 9, 39],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(26, 147, 111, 0.6)'
                    ]
                }
            ]
        }

        const chartData_bar_1 = {
            labels: ["Day", "Night", "Max daily variation"],
            datasets: [
                {
                    label: "Metal Roof",
                    data: [25.5, 17.3, 4.7],
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(255, 206, 86, 0.6)'
                    ]
                },
                {
                    label: "Tiled Roof",
                    data: [26.5, 23.3, 2.3],
                },
                {
                    label: "Green Roof",
                    data: [24.8, 19.8, 1.2],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(75, 192, 192, 0.6)'
                    ]
                }
            ]
        }

        const chartData_bar_2 = {
            labels: ["Heating Energy", "Cooling Energy"],
            datasets: [
                {
                    label: "Bare Roof",
                    data: [4218, 933.2],
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(255, 206, 86, 0.6)'
                    ]
                },
                {
                    label: "Green Roof",
                    data: [3696.7, 462.1],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(75, 192, 192, 0.6)'
                    ]
                }
            ]
        }

        const cause_rows = [{
            title: "Electricity generation is the biggest greenhouse gas emission source",
            subtitle: `In Victoria, greenhouse gas emission has always been an important cause of climate change. As shown in the graph on the left, 50.9% of the greenhouse gas comes from electricity generation. Because the source of electricity generation in Australia is mainly coal combustion.`,
            isChartPie: "True",
            chartData: chartData_pie_1,
            chartTitle: "Victorian greenhouse gas emissions by sector, 2017",
            imgWidth: "400px"
        },
        {
            title: "Heating Ventilation and Air Conditioning (HVAC) is generally responsible for a significant proportion of total building energy consumption",
            subtitle: `As for energy consumption, as in the pie chart shown on the left, 39% of the electricity usage of a building is used for HACV (Heating Ventilation and Air Conditioning). As the average temperature has increased in recent years and heatwaves’ influence, the percentage of HACV is tending to be higher.`,
            isChartPie: "True",
            chartData: chartData_pie_2,
            chartTitle: "Typical energy consumption breakdown in a building, 2012",
            imgWidth: "400px"
        }]

        const rows = [{
            title: "Green roof can make buildings’ internal temperature more stable",
            subtitle: `After installing green roofs, the internal temperature variation of buildings will be reduced for approximately 3 degrees and 1degree for metal roofs and tiled roofs separately, which means that green roofs can help with maintaining the building’s internal temperature to be more stable.`,
            isChartBar: "True",
            chartTitle: "Internal temperature effects of different roof types",
            chartData: chartData_bar_1,
            imgWidth: "400px"
        },
        {
            title: "Green infrastructures can reduce the cost of cooling and heating",
            subtitle: `Since the internal temperature is more stable under green roof, compared with buildings without green roof, buildings with green roofs can save about 522mj of heating energy and 471mj of cooling energy. When the energy used for HACV is reduced, the greenhouse gas generated for electricity generation is also reduced.`,
            isChartBar: "True",
            chartTitle: "Heating and cooling energy demand in different roofs",
            chartData: chartData_bar_2,
            imgWidth: "400px"
        },
        ]
        const ht_title = "Try our interactive tools"
        const ht_subtitle = "Why is this important to me?"
        const ht_url = "/why"

        return (
            <>
                <Breadcrumb parent={bc_parent} child={bc_child} />
                <HeroImageRight title={hir_title} subtitle={hir_subtitle} img={ChartLine} isChart="True" size="is-medium" />
                <Card isTitle="True" title={c_title} imgSize={c_imgSize}
                    c1_title="Coral Bleaching" c1_content={"Australia’s Great Barrier Reef is one of the seven natural wonders on our planet. It has been stressed by warmer and more acidic waters, coral expels the colorful algae it depends on to survive. The coral turns white and unless the coral has a chance to recover and the algae can return, it can die, upsetting entire marine ecosystems."} c1_img={img_coralBleaching}
                    c2_title="Bushfires" c2_content="Bushfires are becoming more extreme, especially in southern and eastern parts of the country. The most destructive fires are usually preceded by extreme high temperatures. Ken Thompson (former deputy fire chief of the state of New South Wales) reported that fire season now runs for nine months out of the year in Australia." c2_img={img_bushFire}
                    c3_title="Heatwaves" c3_content="In January 2018, temperatures in Sydney soared to over 47 degrees Celsiu. It was the hottest day the city had seen in nearly 80 years. Climate change is making heatwaves more common, more severe, and longer lasting. Heatwaves have real impacts on human health and wellbeing – leading to heat exhaustion or even heat stroke." c3_img={img_sun}
                />
                <HeroImageLeft title="We have noticed that" rows={cause_rows} />
                <HeroImageLeft title="How green infrastructures Help" rows={rows} />
                <HeroText title={ht_title} subtitle={ht_subtitle} url={ht_url} is2B={true}/>
            </>
        );
    }
}

export default Why;