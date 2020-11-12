import './MemberList.scss';
import Button from '../../components/button/Button';
import Card from '../../components/card/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Loading from '../../components/loading/Loading';

const MemberList=({history,match})=> { 
    const [membersState, setMembersState] = useState({
        members: null,
        status: 'idle',
    });

    useEffect(() => {

        (async () => {
            setMembersState({ members: null, status: 'pending' });
            try {
                const result = await axios.get('http://ec2-13-124-127-8.ap-northeast-2.compute.amazonaws.com:3000/api/members');
                setTimeout(() => setMembersState({ members: result.data.data, status: 'resolved' }), 800);
                
            } catch (e) { 
                setMembersState({ members: null, status: 'rejected' });
            }
        })();
    }, []);
    switch (membersState.status) {
        
        case 'pending':
            return <Loading />;
        case 'rejected':
            return <div>실패 page</div>;
        case 'resolved':
        return (
            <div className="member-list">
                <div className="member-list__title">파트원 소개</div>
                <div className="member-list__header member-list-header">
                    <div className="member-list-header__nav">Gallery View</div>
                    <div className="member-list-header__empty"></div>
                    <Button text="Properties" textColor="#777"></Button>
                    <Button text="Filter" textColor="#777"></Button>
                    <Button text="Sort" textColor="#777"></Button>
                    <Button text="Search" textColor="#777" icon="search"></Button>
                    <Button text="..." textColor="#777"></Button>
                </div>
                <hr />
                <div className="member-list-content-wrapper">
                        {membersState.members.map((member, i) =>
                            <Card key={`member-${member.id}`} route={{ history, match }}
                                memberData={member}  />)}
                    </div>
            </div>
        );
        case 'idle':
        default :
            return <div>idle 입니다</div>
    }
    
}

export default MemberList;