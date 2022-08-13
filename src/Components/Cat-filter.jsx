import Responsive from "./cartList";
const Filter = () => {
  return (
    <div className="container max-size">
      <div className="main-cate">
        <div className="row">
          <div className=" col-md-3 filter-res">
            <div className="filter">
              <div className="heading">
                <h5>Filter</h5>
              </div>
              <div className="left ">
                <div className="head1">
                  <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingOne">
                        <button
                          class="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Category
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        class="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <div className="item-bag">
                            <input type="checkbox" name="" id="bag" />
                            <label htmlFor="bag">Bag & Accessories</label>
                          </div>
                          <div className="item-bag">
                            <input type="checkbox" name="" id="hom" />
                            <label htmlFor="hom">Home & Living</label>
                          </div>
                          <div className="item-bag">
                            <input type="checkbox" name="" id="choco" />
                            <label htmlFor="choco">Chocolate Hampers</label>
                          </div>
                          <div className="item-bag">
                            <input type="checkbox" name="" id="tees" />
                            <label htmlFor="tees">T-Shirts</label>
                          </div>
                          <div className="item-bag">
                            <input type="checkbox" name="" id="hamp" />
                            <label htmlFor="hamp">Gift Hampers</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingTwo">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Color
                        </button>
                      </h2>
                      <div
                        id="collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <div className="item-bag">
                            <input type="checkbox" name="" id="blk-clr" />
                            <label htmlFor="blk-clr">Black</label>
                          </div>
                          <div className="item-bag">
                            <input type="checkbox" name="" id="blu-clr" />
                            <label htmlFor="blu-clr">blue</label>
                          </div>
                          <div className="item-bag">
                            <input type="checkbox" name="" id="wt-clr" />
                            <label htmlFor="wt-clr">White</label>
                          </div>
                          <div className="item-bag">
                            <input type="checkbox" name="" id="grn-clr" />
                            <label htmlFor="grn-clr">Green</label>
                          </div>
                          <div className="item-bag">
                            <input type="checkbox" name="" id="rd-clr" />
                            <label htmlFor="rd-clr">Red</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2 class="accordion-header" id="headingThree">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Size
                        </button>
                      </h2>
                      <div
                        id="collapseThree"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div class="accordion-body">
                          <div className="item-bag">
                            <input type="checkbox" name="" id="size-s" />
                            <label htmlFor="size-s">Small</label>
                          </div>
                          <div className="item-bag">
                            <input type="checkbox" name="" id="size-m" />
                            <label htmlFor="size-m">Medium</label>
                          </div>
                          <div className="item-bag">
                            <input type="checkbox" name="" id="size-l" />
                            <label htmlFor="size-l">Large</label>
                          </div>
                          <div className="item-bag">
                            <input type="checkbox" name="" id="size-xl" />
                            <label htmlFor="size-xl">Extra Large</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-9 no-pad">
            <Responsive />
            <Responsive />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Filter;
