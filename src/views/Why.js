// Modules
import React from "react";

// Components
import HeroImageRight from "../components/HeroImageRight";
import HeroText from "../components/HeroText";
import Breadcrumb from "../components/Breadcrumb";
import Card from "../components/Card";
import ChartLine from "../components/ChartLine";
import ChartBar from "../components/ChartBar";
import ChartPie from "../components/CharPie";

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
            subtitle: `Building owners and developers are increasingly installing green roofs, walls or facades to add a
                   point of difference, increase commercial returns, provide visual appeal and turn a building into a
                   local landmark. Most building owners in Melbourne ignore the potential of large, leasable spaces
                   on rooftops that can be transformed into versatile recreation, amenity or productive facilities, or
                   commercial spaces for bars, restaurants or cafés.`,
            isChartPie: "True",
            chartData: chartData_pie_1,
            chartTitle: "Victorian greenhouse gas emissions by sector, 2017",
            imgWidth: "300px"
        },
        {
            title: "Heating Ventilation and Air Conditioning (HVAC) is generally responsible for a significant proportion of total building energy consumption",
            subtitle: `Building owners and developers are increasingly installing green roofs, walls or facades to add a
                   point of difference, increase commercial returns, provide visual appeal and turn a building into a
                   local landmark. Most building owners in Melbourne ignore the potential of large, leasable spaces
                   on rooftops that can be transformed into versatile recreation, amenity or productive facilities, or
                   commercial spaces for bars, restaurants or cafés.`,
            isChartPie: "True",
            chartData: chartData_pie_2,
            chartTitle: "Typical energy consumption breakdown in a building, 2012",
            imgWidth: "300px"
        }]

        const rows = [{
            title: "Increased property value and other benefits for building owners",
            subtitle: `Building owners and developers are increasingly installing green roofs, walls or facades to add a
                   point of difference, increase commercial returns, provide visual appeal and turn a building into a
                   local landmark. Most building owners in Melbourne ignore the potential of large, leasable spaces
                   on rooftops that can be transformed into versatile recreation, amenity or productive facilities, or
                   commercial spaces for bars, restaurants or cafés.`,
            isChartBar: "True",
            chartData: chartData_pie_2,
            imgWidth: "300px"
        },
        {
            title: "Increased property value and other benefits for building owners",
            subtitle: `Building owners and developers are increasingly installing green roofs, walls or facades to add a
                   point of difference, increase commercial returns, provide visual appeal and turn a building into a
                   local landmark. Most building owners in Melbourne ignore the potential of large, leasable spaces
                   on rooftops that can be transformed into versatile recreation, amenity or productive facilities, or
                   commercial spaces for bars, restaurants or cafés.`,
            isChartBar: "True",
            chartData: chartData_bar_2,
            imgWidth: "300px"
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
                    c1_title="Coral Bleaching" c1_content={"Australia’s iconic Great Barrier Reef has been stressed by warmer and more acidic waters, coral expels the colorful algae it depends on to survive. The coral turns white and unless the coral has a chance to recover and the algae can return, it can die, upsetting entire marine ecosystems."} c1_img={img_coralBleaching}
                    c2_title="Bushfires" c2_content="Bushfires are becoming more extreme, especially in southern and eastern parts of the country. Ken Thompson (former deputy fire chief of the state of New South Wales) reported that fire season now runs for nine months out of the year in Australia." c2_img={img_bushFire}
                    c3_title="Heatwaves" c3_content="In January 2018, temperatures in Sydney soared to over 47 degrees Celsiu. It was the hottest day the city had seen in nearly 80 years. Climate change is making heatwaves more common, more severe, and longer lasting. Heatwaves have real impacts on human health and wellbeing – leading to heat exhaustion or even heat stroke." c3_img={img_sun}
                />
                <HeroImageLeft title="We have noticed that" rows={cause_rows} imgWidth="400px" />
                <HeroImageLeft title="How green infrastructures Help" rows={rows} imgWidth="400px" />
                <HeroText title={ht_title} subtitle={ht_subtitle} url={ht_url} />
            </>
        );
    }
}

export default Why;