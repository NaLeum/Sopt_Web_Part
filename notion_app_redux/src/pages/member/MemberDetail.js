import './MemberDetail.scss';

import { useEffect, useState } from 'react';

import Button from '../../components/button/Button';
import Loading from '../../components/loading/Loading';

import { Input } from 'antd';
import { InstagramOutlined, AlignLeftOutlined, RadarChartOutlined } from '@ant-design/icons';
import axios from 'axios';

function MemberDetail({ match }) {
    const [ memberState, setMemberState ] = useState({
        status: 'idle',
        member: null
    });
    
    useEffect(() => {
        (async () => {
            try {
                setMemberState({ status: 'pending', member: null });
                const result = await axios.get(`http://ec2-13-124-127-8.ap-northeast-2.compute.amazonaws.com:3000/api/members/${match.params.id}`);
                console.log(result);
                setTimeout(() => setMemberState({ status: 'resolved', member: result.data.data }), 600);
                console.log(memberState)
            } catch (e) {
                setMemberState({ status: 'rejected', member: null });
            }
        })();
    }, []);

    const onChangeInputs = (evt) => {
        const { name, value } = evt.target;
        setMemberState({
            status: 'resolved',
            member: {
                ...memberState.member,
                [name]: value
            }
        });

    };
    
    const memberElement = () => (
        <div className="member-detail">
            <div className="member-detail__button-area">
                <Button text="Add icon"></Button>
                <Button text="Add cover"></Button>
            </div>
            <div className="member-detail__content name"> {memberState.member.name} </div>
            <hr style={{borderTop: "solid 1px #eee", marginBottom: "24px"}}/>
            <div className="member-detail__content">
                <div className="content-title"><InstagramOutlined />&nbsp; 인스타 아이디</div>
                <Input className="content-input" bordered={false} name="instagram" value={memberState.member.instagram} onChange={onChangeInputs}/>
            </div>
            <div className="member-detail__content">
                <div className="content-title"><AlignLeftOutlined />&nbsp; 한 줄 소개</div>
                <Input className="content-input" bordered={false} name="introduction" value={memberState.member.introduction} onChange={onChangeInputs}/>
            </div>
            <div className="member-detail__content">
                <div className="content-title"><RadarChartOutlined />&nbsp; mbti</div>
                <Input className="content-input" bordered={false} name="mbti" value={memberState.member.mbti} onChange={onChangeInputs}/>
            </div>
            <div className="member-detail__content">
                { memberState.member.profileUrl === "" ? '' :<img className="content-img" src={memberState.member.profileUrl} name="profileUrl" alt='프로필이미지'/>}
            </div>
        </div>
    );

    switch (memberState.status) {
        case 'pending':
            return <Loading />;
        case 'resolved':
            return memberElement();
        case 'rejected':
            return <h1>해당 멤버가 없습니다</h1>;
        case 'idle':
        default: 
            return <div></div>
    }
}

export default MemberDetail;