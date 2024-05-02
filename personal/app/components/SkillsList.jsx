const skills = [
    { name: 'React.js', image: '/Images/react_logo.png' },
    { name: 'JavaScript', image: '/Images/javascript_logo.png' },
    { name: 'Java', image: '/Images/java_logo.png' },
    { name: 'C++', image: '/Images/cpp_logo.png' },
    { name: 'Python', image: '/Images/python_logo.png' },
    { name: 'Firebase', image: '/Images/firebase_logo.png' },
    { name: 'Express', image: '/Images/express_logo.png' },
    { name: 'Next.js', image: '/Images/nextjs_logo.png' },
    { name: 'Node.js', image: '/Images/nodejs_logo.png' },
    { name: 'React Native', image: '/Images/react_native_logo.png' },
    { name: 'Flask', image: '/Images/flask_logo.png' },
    { name: 'DJango', image: '/Images/django_logo.png' },
    { name: 'MongoDB', image: '/Images/mongodb_logo.png' },
];

const SkillsList = () => (
    <div className="text-lg md:text-xl text-[#BFBABA] font-bold flex flex-wrap items-center">
        {skills.map(skill => (
            <div key={skill.name} className="flex items-center mr-4 mb-4">
                <img src={skill.image} alt={skill.name} className="w-12 h-12 md:w-15 md:h-15 mr-2" />
                <span>{skill.name}</span>
            </div>
        ))}
    </div>
);


export default SkillsList;
