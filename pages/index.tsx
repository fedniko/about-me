import MainLayout from "../components/MainLayout";
import {useDispatch, useSelector} from 'react-redux';
import {IRootState} from "../store/types";
import {Col, Container, Row} from "react-bootstrap";

export default function Home() {
  const dispatch = useDispatch();
  const {contactUs} = useSelector((state: IRootState) => state.modals);
  const {status} = useSelector((state: IRootState) => state.auths);
  const handleClose = () => {
    dispatch({type: 'CONTACTUS_CLOSE'});
  };
  return (
    <MainLayout title="Главная">
      <Container>
        <Row>
          <Col>
            <div>
              <p>{status}</p>
              <a
                className="text footer__links___right_item"
                onClick={() => dispatch({type: 'CONTACTUS_OPEN'})}
              >
                Open
              </a>
              <a
                className="text footer__links___right_item"
                onClick={() => dispatch({type: 'CONTACTUS_CLOSE'})}
              >
                Close
              </a>
              <a
                className="text footer__links___right_item"
                onClick={() => dispatch({type: 'AUTH_LOGIN'})}
              >
                LOGIN
              </a>
              <a
                className="text footer__links___right_item"
                onClick={() => dispatch({type: 'AUTH_LOGOUT'})}
              >
                LOGOUT
              </a>
            </div>
            <p className="text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut cupiditate dolor dolore dolores
              facilis in ipsa iure nisi placeat quia, quod ullam. Amet excepturi id ipsam iste, nihil possimus?
            </p>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  )
}