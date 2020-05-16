// Modules
import React from "react";

// Components
import Breadcrumb from "../components/Breadcrumb";
import HeroImageRight from "../components/HeroImageRight";
import HeroImageLeft from "../components/HeroImageLeft";
import HeroText from "../components/HeroText";
import Card from "../components/Card";
import Image from "../components/Image";

// Assets
import img_diy from "../assets/img/diy.png";
import img_aloevera from "../assets/img/aloevera.jpeg";
import img_bamboo from "../assets/img/bamboo.jpeg";
import img_fig from "../assets/img/fig.jpg";
import img_lily from "../assets/img/lily.jpg";
import img_fern from "../assets/img/fern.jpeg";
import img_spiderplant from "../assets/img/spiderplant.jpg";
import img_cup from "../assets/img/cup.png";
import img_basics from "../assets/img/basics.png";
import img_tag from "../assets/img/tag.png";
import img_material from "../assets/img/material.png";
import img_tool from "../assets/img/tool.png";
import img_location from "../assets/img/location.png";
import img_seed from "../assets/img/seed.png";
import img_bed from "../assets/img/bed.png";
import img_waterm from "../assets/img/waterm.png";
import img_eat from "../assets/img/eat.png";


function Diy() {
    const bc_parent = "Self-Planting Guidelines";
    const bc_child = "DIY your small project";

    const hir_title = `Start eco-friendly DIY project with small budget`
    const hir_subtitle = `Going green in your home does not have to be a 
    big-budget project. If you’re a homeowner or renter on a budget, making 
    little changes to your lifestyle at home can help you incorporate eco-friendly 
    habits without breaking the bank. `;
    const hir_image = img_diy;
    const hir_size = "is_medium";

    const ht_title_1 = "Indoor plants can cool your house down and purify the air";
    const ht_subtitle_1 = "Taking care of houseplants is easier than you might think"

    const c_title_1 = "Some indoor plants we recomend"
    
    const card_title_1 = ["Aloe Vera", "Bamboo Palm", "Weeping Fig"]
    const card_content_1 = [`Aloe Vera is a common houseplant in the succulent family that's widely known for its medicinal uses. It comes in many different varieties, all of which have been scientifically proven to help cool interior spaces.`,
                            `This small palm rarely reaches two metres and its large leaves mean it can act as an excellent air humidifier. Bamboo palm is also very good at filtering out benzene and trichloroethylene from the atmosphere.`,
                            `Its leafy nature means a high rate of transpiration, which keeps the air around a weeping fig moist and cool. It can also decontaminate the air by absorbing any heavy metal particles and indoor pollutants that are present.`]

    const card_title_2 = ["Peace lily", "Boston fern", "Spider plant"]
    const card_content_2 = [`The more leaf area a plant has, the higher the amount of oxygen and moisture it releases during transpiration. The lush leaves of peace lily are invaluable for helping to cool the air in a room. `,
                            `Many ferns act as natural air humidifiers and Boston fern is one of the best. It’s also a very good air purifier and the scientists have singled out for their ability to clean the air of formaldehyde and benzene.`,
                            `Making a comeback after many years in the style wilderness, the spider plant is deservedly popular with newbie plant lovers, as it’s one of the easiest plants to grow. It will help cool the air and absorb toxins present `]

    const hil_rows_1_title = "Some tips for planting indoor plants";

    const hil_rows_1 = [{
        "title": "Recycled planters",
        "subtitle": `Thinking of throwing away those old coffee tins or mason jars? Give 
        them a new life instead as a recycled planter. Clean out these old containers thoroughly 
        and pick up some soil and herbs to start your own in-home herb garden. Growing herbs 
        indoors is perfect for both big kitchens and small spaces. This is a cheap alternative 
        to a massive garden space in your backyard and has the added benefit of using recycled materials.`,
        "img": <Image img={img_cup} imgAlt="Recycled planters" />, "isImage": "True"
    },
    {
        "title": "Planting basics",
        "subtitle": `For starters, use good soil. Stop by a store with a gardening section like Bunnings 
        and ask which soil works best with the plants you want.
        Many people kill their plants by over-watering, so we recommend new plant parents start 
        with cacti or succulent soil for all indoor plants. This kind of earth provides both good 
        drainage and nutrients.
        Each plant needs to be watered at a different rate, so make a list, note watering days 
        in your planner, or set an alarm on your phone so you don’t over or under water.`,
        "img": <Image img={img_basics} imgAlt="Planting basics" />, "isImage": "True"
    },
    {
        "title": "Tag of specific instructions",
        "subtitle": `When you purchase a plant, you will see specific instructions on the tag telling 
        you what type of light the plant needs, how often to water the plant, and how often to fertilize 
        the plant. Saving this tag and following the suggestions is the best way to ensure that your plants 
        will live long and prosper.`,
        "img": <Image img={img_tag} imgAlt="Tag of specific instructions" />, "isImage": "True"
    },
    ];

    const ht_title_2 = "A simple veggie garden using steel pipes";
    const ht_subtitle_2 = "Build a small and simple veggie garden"

    const hil_rows_2_title = "Before you start, you may need some materials and tools";

    const hil_rows_2 = [{
        "title": "Materials Required",
        "subtitle": `Garden bed Potting Mix Plants Mulch Compost Fertilizer Seeds and seedlings Hose and fittings`,
        "img": <Image img={img_material} imgAlt="Materials Required" />, "isImage": "True"
    },
    {
        "title": "Tools Required",
        "subtitle": `Gardening hand tools
        Rake
        Watering can
        Gardening gloves`,
        "img": <Image img={img_tool} imgAlt="Tools Required" />, "isImage": "True"
    },
    ];

    const hil_rows_3_title = "Now, you can build your veggie garden in 4 simple steps";

    const hil_rows_3 = [{
        "title": "STEP 1: Choose an ideal location",
        "subtitle": `The first thing to figure out is the best place to locate your garden 
        bed. All vegies need sunshine and morning sun is ideal, so look for an easterly aspect. 
        You’ll also need to protect your new seedlings from harsh weather conditions. Avoid areas 
        with large trees, as they can steal moisture and nutrients from your growing area.`,
        "img": <Image img={img_location} imgAlt="STEP 1: Choose an ideal location" />, "isImage": "True"
    },
    {
        "title": "STEP 2: Assemble the Garden Bed",
        "subtitle": `Lay out all the parts of the garden bed and remove the protective film off 
        the steel panels. Check the instructions for which panel to start with. With your garden 
        gloves on, take the first piece of corrugated steel and carefully slide one PVC post onto 
        the end of the steel panel vertically. Take the next sheet of metal into the other side of 
        the first post making sure each lug in the steel panel slides freely inside the PVC groove. 
        Keep adding posts and panels until all are joined together. Next, press the post gaps on top 
        of each post.`,
        "img": <Image img={img_bed} imgAlt="STEP 2: Assemble the Garden Bed" />, "isImage": "True"
    },
    {
        "title": "STEP 3: Plant your seed and seedlings",
        "subtitle": `You can either use the cardboard packaging that the garden bed came in as a base 
        for your garden or can choose to line your veggie pack with weed matting. The garden beds are 
        ready to be filled with planting soil and compost. Most vegetables can be bought as seedlings, 
        or you can start from scratch and plant seeds. If you do plant from seeds, soil preparation is 
        particularly important.`,
        "img": <Image img={img_seed} imgAlt="STEP 3: Plant your seed and seedlings" />, "isImage": "True"
    },
    {
        "title": "STEP 4: Maintain Your Plant",
        "subtitle": `Water your seedlings in well and always check the soil and keep it moist. Regular 
        amounts of organic or artificial fertilizers will encourage growth. Manure, blood and bone and 
        liquid fertilizers will also get the nutrients going too. Insects and diseases are going to love 
        your garden as much as you do, so make sure you keep them at bay.`,
        "img": <Image img={img_waterm} imgAlt="STEP 4: Maintain Your Plant" />, "isImage": "True"
    },
    {
        "title": "Reminder another thing: re-grow veggies",
        "subtitle": `Starting a garden at home does not even necessarily mean splurging on new plants or 
        seeds. You can start growing from your food waste as well. Save the tops of carrots and the roots 
        of onions to use as the re-growth for your new home garden. You can grow anything from herbs to 
        avocado trees with patience and a little know-how.`,
        "img": <Image img={img_eat} imgAlt="Re-grow veggies" />, "isImage": "True"
    },
    ];

    //const hil_rows_4_title = "Using re-grow veggies to plant";

    //const hil_rows_4 = [{
    //    "title": "Re-grow veggies",
    //    "subtitle": `Starting a garden at home does not even necessarily mean splurging on new plants or 
    //    seeds. You can start growing from your food waste as well. Save the tops of carrots and the roots 
    //    of onions to use as the re-growth for your new home garden. You can grow anything from herbs to 
    //    avocado trees with patience and a little know-how.`,
    //    "img": <Image img={img_eat} imgAlt="Re-grow veggies" />, "isImage": "True"
    //},
    //];
    
    const hil_imgWidth = "225px"
    const c_imgSize = "image is-4by3"

    return (
        <>
            <Breadcrumb parent={bc_parent} child={bc_child} />
            <HeroImageRight title={hir_title} subtitle={hir_subtitle} img={hir_image} size={hir_size} />
            <HeroText title={ht_title_1} subtitle={ht_subtitle_1} isT={true}/>
            <Card isTitle="True" title={c_title_1} imgSize={c_imgSize}
                c1_title={card_title_1[0]} c1_content={card_content_1[0]} c1_img={img_aloevera}
                c2_title={card_title_1[1]} c2_content={card_content_1[1]} c2_img={img_bamboo}
                c3_title={card_title_1[2]} c3_content={card_content_1[2]} c3_img={img_fig} />
            <Card c1_title={card_title_2[0]} c1_content={card_content_2[0]} c1_img={img_lily}
                c2_title={card_title_2[1]} c2_content={card_content_2[1]} c2_img={img_fern}
                c3_title={card_title_2[2]} c3_content={card_content_2[2]} c3_img={img_spiderplant} />            
            <HeroImageLeft title={hil_rows_1_title} subtitle={null} rows={hil_rows_1} imgWidth={hil_imgWidth} />
            <HeroText title={ht_title_2} subtitle={ht_subtitle_2} isT={true}/>
            <HeroImageLeft title={hil_rows_2_title} subtitle={null} rows={hil_rows_2} imgWidth={hil_imgWidth} />
            <HeroImageLeft title={hil_rows_3_title} subtitle={null} rows={hil_rows_3} imgWidth={hil_imgWidth} />
        </>
    );
}

export default Diy;