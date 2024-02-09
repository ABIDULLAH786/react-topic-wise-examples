import { Link, Outlet, useLocation } from "react-router-dom";
import useLastSegment from "../hooks/useLastSegment";

const Outline = () => {
    let currentPage = useLastSegment()

    const topics = [
        {
            title: 'React Hooks',
            url: "/hooks",
            subTopics: [
                {
                    title: 'useMemo',
                    url: "use-memo"
                },
                {
                    title: 'useCallback',
                    url: "use-callback"
                },
            ]
        }
    ]
    return (
        <div className='layout_container'>
            <div className={'sidebar'}>
                <div className="sidebar_header">Table of content</div>
                {topics?.map((topic, index) =>
                    <div key={index} className="siderbar_topics_container" >
                        <Link to={`${topic.url}`} className="siderbar_topic">{topic.title}</Link>
                        {topic?.subTopics?.map((subTopic, index) =>
                            <div key={index} >
                                <Link to={`${topic.url + '/' + subTopic.url}`}
                                    className="siderbar_sub_topic"
                                    style={{ color: currentPage == subTopic.url ? '#077c94' : '' }}
                                >
                                    {subTopic.title}
                                </Link>
                            </div>
                        )}

                    </div>
                )}
            </div>
            <div className="main">
                <Outlet />
            </div>
        </div>
    )


}

export default Outline;