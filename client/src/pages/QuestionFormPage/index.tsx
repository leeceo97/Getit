import * as React from 'react';
import SubHeader from '../../Components/Commons/SubHeader/SubHeader';
import PostForm from '../../Components/PostForm';
import { PageBackground, PageContainer, PageTitle } from '../../styles/page';

function QuestionFormPage() {
  return (
    <div>
      <SubHeader />
      <PageBackground>
        <PageTitle>질문 게시판 글 작성</PageTitle>
        <PageContainer width='80%' padding='3%'>
          <PostForm />
        </PageContainer>
      </PageBackground>
    </div>
  );
}

export default QuestionFormPage;