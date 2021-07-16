import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

const Item = props => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img className="card-img-top" alt="Card image cap" />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make up the bulk of the content.
				</p>

				<Link to={"/single/" + props.itemId}>
					<button type="button" className="btn btn-primary">
						Click Me!
					</button>
				</Link>
			</div>
		</div>
	);
};

const ItemList = () => {
	const { store, actions } = useContext(Context);

	const list = store.demo.map((item, index) => {
		return <Item key={index} title={item.title} itemId={item.id} />;
	});
	debugger;
	return <div>{list}</div>;
};
export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
			<ItemList />
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
					Read documentation
				</a>
			</p>
		</div>
	);
};

Item.propTypes = {
	title: PropTypes.string,
	itemId: PropTypes.string
};
