import ProgressBar from "./ProgressBar";
import SectionHeader from "./SectionHeader";


const skillArr = [
    { iconPath:'/reactIcon.png', title:'React.js', percentage:90 },
    { iconPath:'/nextIcon.png', title:'Next.js', percentage:70 },
    { iconPath:'/nodeIcon.png', title:'Node.js', percentage:80 },
    { iconPath:'/mysqlIcon.png', title:'MySql', percentage:80 },
    { iconPath:'/htmlIcon.png', title:'Html', percentage:100 },
    { iconPath:'/cssIcon.png', title:'Css', percentage:100 },
    { iconPath:'/gitIcon.png', title:'Git', percentage:100 },
    { iconPath:'/pythonIcon.png', title:'Python', percentage:90 },
    { iconPath:'/djangoIcon.png', title:'Django', percentage:85 },
    { iconPath:'/restIcon.png', title:'REST Api', percentage:90 },
];

const Skills = () => {

    const title = 'Skills';

    const renderProgressBars = () => (

        skillArr.map((itm, idx) => {
            return (
                <div key={itm.title}>
                    <ProgressBar title={itm.title} iconPath={itm.iconPath} percentage={itm.percentage}/>
                </div>
            )
        })
    );

    return (
        <section id='skills' className='w-full h-fit py-20 relative bg-gray-100'>
            <SectionHeader title={title} />
            <div className='max-w-[91%] mx-auto grid md:grid-cols-2 md:gap-10'>
                {
                    renderProgressBars()
                }
            </div>
        </section>
    )
};

export default Skills;