import React from "react";
import styled from "styled-components";
import { Typography, Tag } from "antd";
const {  Text } = Typography;
const ProjectCardDivStyled = styled.div`
    width: 90%;
    height: 160px;
    border: 1px solid lightgray;
    border-radius: 4px; 
    display: flex;
    flex-direction: column;
    margin: 16px;
`
const HeaderDivStyled = styled.div`
    display: flex;
    flex-direction: row;
    padding: 8px;
    justify-content: space-between;
    margin: 8px;
`

const TitleDivStyled = styled.div`
    display: flex;
    flex-direction: column;
`
const TagStyled = styled(Tag)`
    align-self: flex-start;
    border-radius: 12px;
`
const DescriptionDivStyled = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px;
    margin: 8px;
`

interface ProjectProps {
    [key: string]: any
}
const GitHubProjectCard: React.FC<ProjectProps> = (props: ProjectProps) => {
    const { name, visibility, html_url, description, fork, language } = props;

    const renderSubHeader = () => {
        if (fork === true) {
            return (
                <Text>Forked from {name}/{name}</Text>
            )
        } else {
            return <></>
        }
    }

    return (
        <ProjectCardDivStyled>
            <HeaderDivStyled>
                <TitleDivStyled>
                    <Text strong><a target="_blank" href={html_url}>{name}</a></Text>
                    {renderSubHeader()}
                </TitleDivStyled>
                <TagStyled color='default'>{visibility}</TagStyled>
            </HeaderDivStyled>
            <DescriptionDivStyled>
                <Text>{description} </Text>
                <TagStyled color='orange'>{language}</TagStyled>
            </DescriptionDivStyled>
        </ProjectCardDivStyled>
    )
}

export default GitHubProjectCard;