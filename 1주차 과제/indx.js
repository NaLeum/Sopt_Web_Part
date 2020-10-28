const menbers = [{
        name: '이재훈',
        birth: '95년07월09일',
        school: "단국대학교",
        major: "신소재공학과",
        favoriteThing: "강아지"
    },
    {
        name: '천주윤',
        birth: '98년03월16일',
        school: "서울여자대학교",
        major: "산업디자인학과",
        favoriteThing: "김선호"
    },
    {
        name: '엄서영',
        birth: '95년05월01일',
        school: "이화여자대학교",
        major: "융합콘텐츠학과",
        favoriteThing: "펭귄"
    },
    {
        name: '김동관',
        birth: '95년01월21일',
        school: "인천대학교",
        major: "컴퓨터공학과",
        favoriteThing: "뒷풀이"
    }
]

const printTMI = ({
    name,
    birth,
    school,
    major,
    favoriteThing
}, what) => {
    console.log(`
        출력방식 : ${what}
        이름: ${name}
        나이: ${birth}
        학교: ${school}
        전공: ${major}
        좋아하는 것: ${favoriteThing}\n`)
}

// 기본 for 문
for (let i = 0; i < menbers.length; i++) {
    printTMI(menbers[i], 'for');
}
// for ... of 문
for (const menber of menbers) {
    printTMI(menber, 'for of')
}
// for ... in 문
for (const i in menbers) {
    printTMI(menbers[i], 'for in')
}
// forEach문
menbers.forEach(menber => {
    printTMI(menber, 'foreach')
})