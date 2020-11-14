import './MemberList.scss';
import Button from '../../components/button/Button';
import Card from '../../components/card/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Loading from '../../components/loading/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { getMemberList } from '../../modules/member';

const MemberList=({history,match})=> { 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMemberList());
    },[dispatch])
    
    const {memberListInfo,loading} = useSelector(({member,loading})=>(
        {
        memberListInfo : member?.memberListInfo?.data,
        loading:loading['member/GET_MEMBERLIST']
    }))
    


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
                        {memberListInfo && memberListInfo.map((member, i) =>
                            <Card key={`member-${member.id}`} route={{ history, match }}
                                memberData={member}  />)}
                    </div>
            </div>
        );

    
    
}

export default MemberList;