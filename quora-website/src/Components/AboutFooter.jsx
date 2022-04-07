import React from 'react'
import styles from './aboutFooter.module.css'

const AboutFooter = () => {
    return (
        <div className={styles.section1}>
            <div className={styles.section1_a} >
                <div className={styles.section1_a1}  >
                    <div className={styles.section1_a2} >
                        <div className={styles.section1_a3}  >
                            <div className={styles.section1_a3_left} >
                                <div className={styles.section1_cont_div} >
                                    <a className={styles.section1_cont} href="https://www.quora.com/contact" target="_top " >Contact us</a>
                                </div>
                                <div className={styles.section1_cont_div} >
                                    <a className={styles.section1_cont} href="https://www.quora.com/press" target="_top " >Press</a>
                                </div>
                                <div className={styles.section1_cont_div} >
                                    <a className={styles.section1_cont} href="https://www.quora.com/about/challenges" target="_top " >Challenges</a>
                                </div>
                            </div>
                            <div className={styles.section1_a3_right} >
                                <div className={styles.section1_cont_div} >
                                    <a className={styles.section1_cont} href="https://www.quora.com/about/tos" target="_top " >Terms of service</a></div>
                                <div className={styles.section1_cont_div} >
                                    <a className={styles.section1_cont} href="https://www.quora.com/about/privacy" target="_top " >Privacy Policy</a></div>
                                <div className={styles.section1_cont_div} ><a className={styles.section1_cont} href="https://www.quora.com/about/acceptable_use" target="_top " >Acceptable Use</a></div>
                            </div>

                            <div className={styles.section1_icons_container} >
                                <div className={styles.section1_icon_div} >
                                    <a className={styles.section1_icon_anchor} href="https://www.facebook.com/quora" target="_blank " rel="noopener nofollow" >
                                        <span className={styles.section1_icon_span} name="BrandFacebook" >
                                            <span className={styles.section1_icon_span} >
                                                <svg className={styles.section1_icon_svg} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path className={styles.section1_icon_path_fb} fill-rule="evenodd" clip-rule="evenodd" d="M20.5 12a8.5 8.5 0 1 0-9.83 8.397v-5.94H8.513v-2.458h2.159v-1.872c0-2.13 1.269-3.307 3.21-3.307.93 0 1.903.166 1.903.166v2.091h-1.072c-1.056 0-1.385.656-1.385 1.328V12h2.358l-.377 2.457h-1.98v5.94A8.503 8.503 0 0 0 20.5 12Z" fill="#1877F2"></path>
                                                </svg>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                                <div className={styles.section1_icon_div}  >
                                    <a className={styles.section1_icon_anchor} href="https://www.linkedin.com/company/quora" target="_blank " rel="noopener nofollow" >
                                        <span className={styles.section1_icon_span} name="BrandLinkedin" >
                                            <span className={styles.section1_icon_span} >
                                                <svg className={styles.section1_icon_svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                    <path className={styles.section1_icon_path_linked} d="M17.634 17.634h-2.373V13.92c0-.885-.015-2.024-1.233-2.024-1.235 0-1.424.965-1.424 1.961v3.776h-2.37V9.998h2.275v1.044h.033c.316-.6 1.091-1.233 2.245-1.233 2.403 0 2.847 1.581 2.847 3.637v4.188zM7.559 8.955a1.376 1.376 0 1 1-.003-2.751 1.376 1.376 0 0 1 .003 2.751zm-1.188 8.679h2.376V9.998H6.371v7.636zM18.816 4H5.18C4.529 4 4 4.516 4 5.154v13.692C4 19.483 4.529 20 5.18 20h13.636c.652 0 1.184-.517 1.184-1.155V5.154A1.17 1.17 0 0 0 18.816 4z" fill="#0077b5" fill-rule="evenodd"></path>
                                                </svg>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                                <div className={styles.section1_icon_div}  >
                                    <a className={styles.section1_icon_anchor} href="https://twitter.com/quora" target="_blank " rel="noopener nofollow" >
                                        <span className={styles.section1_icon_span} name="BrandTwitter" >
                                            <span className={styles.section1_icon_span} >
                                                <svg className={styles.section1_icon_svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                    <path className={styles.section1_icon_path_twitter} d="M8.846 19.313c6.415 0 9.924-5.315 9.924-9.924 0-.151 0-.301-.01-.451a7.092 7.092 0 0 0 1.74-1.805 6.96 6.96 0 0 1-2.003.549 3.5 3.5 0 0 0 1.533-1.929 6.99 6.99 0 0 1-2.215.847 3.49 3.49 0 0 0-5.944 3.181 9.9 9.9 0 0 1-7.188-3.644 3.49 3.49 0 0 0 1.08 4.656 3.46 3.46 0 0 1-1.583-.437v.044a3.49 3.49 0 0 0 2.798 3.419 3.48 3.48 0 0 1-1.575.06 3.49 3.49 0 0 0 3.259 2.422 7 7 0 0 1-4.332 1.496 7.1 7.1 0 0 1-.83-.05 9.867 9.867 0 0 0 5.346 1.564" fill="#1da1f2"></path>
                                                </svg>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className={styles.section1_b2} >
                        <a className={styles.section1_b2_anchor} href="https://www.quora.com/" target="_top " >
                            <div className={styles.section1_b2_span_div} >
                                <span className={styles.section1_b2_span}>
                                    <svg className={styles.section1_b2_svg} viewBox="0 0 202 115">
                                        <g className={styles.section1_b2_g} stroke="none" fill="none" fill-rule="evenodd" >
                                            <path className={styles.section1_b2_path} d="M24.4,31.9 C37.1,31.9 49.1,41.8 49.1,56.2 C49.1,64.3 45.3,70.9 39.9,75.3 C41.5,77.9 43.5,79.7 45.9,79.7 C48.7,79.7 49.9,77.5 50.1,75.7 L50.1,75.7 L53.7,75.7 C53.9,78.1 52.7,87.3 42.7,87.3 C36.5,87.3 33.3,83.7 30.9,79.7 C28.9,80.1 26.7,80.5 24.5,80.5 C12.2,80.5 0,70.6 0,56.2 C0,41.8 12.2,31.9 24.4,31.9 Z M114.1,42.8 C124.3,42.8 132.5,50 132.6,60.7 C132.6,72 124.3,79.4 114.1,79.4 C104.2,79.4 95.6,71.9 95.6,60.7 C95.6,49.8 104.1,42.8 114.1,42.8 Z M181.4,42.8 C190.4,42.8 196,45.2 196,54.2 L196,54.2 L196,69.6 C196,72 196.8,73.2 198.8,73.2 C199.8,73.2 200.6,72.8 201,72.6 L201,72.6 L201.9,74.4 C201.1,75.8 198.5,78.4 193.7,78.4 C189.5,78.4 186.9,76.4 186.5,73.2 L186.5,73.2 L186.3,73.2 C184.3,76.8 180.7,79.2 175.5,79.2 C169.3,79.2 165.5,76 165.5,70.2 C165.5,58.8 181.4,62 186,54.4 L186,54.4 L186,52.6 C186,47.2 183.8,46 181.4,46 C174.2,46 177.4,54.4 171,54.4 C167.8,54.4 166.6,52.6 166.6,50.4 C166.6,46.2 171.8,42.8 181.4,42.8 Z M67.6,43.6 L67.6,67 C67.6,71.4 69.8,73.4 73,73.4 C75.6,73.4 78.4,72.2 79.8,69.4 L79.8,50 C79.8,48 79.2,47.2 77,47.2 L74.6,47.2 L74.6,43.6 L89.8,43.6 L89.8,69.3 C89.8,71.7 90.6,72.9 93.4,72.9 L93.8,72.9 L93.8,76.7 L80.2,78.9 L80.2,73.8 L80,73.8 C77.4,77.1 73.6,79.1 68.6,79.1 C62.4,79.1 57.8,75.9 57.8,67.3 L57.8,50 C57.8,48 57,47.2 54.8,47.2 L52.6,47.2 L52.6,43.6 L67.6,43.6 Z M157.9,43 C161.1,43 163.7,44.8 163.7,48.4 C163.7,51 162.5,53.6 158.9,53.6 C155.9,53.6 155.3,50.8 152.7,50.8 C150.5,50.8 148.7,53 148.7,56.2 L148.7,70.4 C148.7,73.6 149.5,74.6 153.1,74.6 L155.1,74.6 L155.1,78.4 L133.5,78.4 L133.5,74.7 L134.9,74.7 C138.5,74.7 138.9,73.7 138.9,70.5 L138.9,50 C138.9,48 137.9,47.2 135.7,47.2 L133.7,47.2 L133.7,43.6 L147.5,43.6 L148.1,50.8 L148.5,50.8 C149.9,45.6 154.1,43 157.9,43 Z M24.5,35.8 C15.3,35.8 11.3,42.7 11.3,56.1 C11.3,69.5 15.3,76.4 24.5,76.4 C26.2,76.4 27.7,76 28.9,75.6 C27.1,71.4 24.7,67.4 20.1,67.4 C19.3,67.4 18.5,67.6 17.7,68 L17.7,68 L16.3,65.2 C18.3,63.5 21,62.2 24.7,62.2 C30.5,62.2 33.5,65 35.9,68.6 C37.3,65.6 37.9,61.4 37.9,56.1 C37.9,42.7 33.9,35.8 24.5,35.8 Z M114.1,46.2 C109.3,46.2 106.5,51 106.5,60.6 C106.5,70.4 109.3,75.4 114.1,75.4 C119.3,75.4 121.3,70.4 121.5,60.6 C121.7,51.1 119.3,46.2 114.1,46.2 Z M185.9,58.6 C182.7,62.1 175.3,62.6 175.3,69 C175.3,72.2 177.3,74 179.9,74 C184.3,74 185.9,70.2 185.9,66 L185.9,66 Z">
                                            </path>
                                        </g>
                                    </svg>
                                </span>
                            </div>
                        </a>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default AboutFooter