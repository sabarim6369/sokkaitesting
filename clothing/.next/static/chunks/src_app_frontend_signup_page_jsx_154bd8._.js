(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_frontend_signup_page_jsx_154bd8._.js", {

"[project]/src/app/frontend/signup/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: require } = __turbopack_context__;
{
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
var _s = __turbopack_refresh__.signature();
'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { initOTPless } from '@/app/utils/initOtpless';
import './signup.css';
import Modal from 'react-modal';
const Signup = ()=>{
    _s();
    const [backgroundIndex, setBackgroundIndex] = useState(0);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const router = useRouter();
    const backgrounds = [
        '/images/login/a4.jpg',
        '/images/login/a3.jpg',
        '/images/login/a6.webp',
        '/images/login/a7.jpg',
        '/images/login/a8.jpg',
        '/images/login/a11.jpg'
    ];
    useEffect({
        "Signup.useEffect": ()=>{
            const interval = setInterval({
                "Signup.useEffect.interval": ()=>{
                    setBackgroundIndex({
                        "Signup.useEffect.interval": (prevIndex)=>(prevIndex + 1) % backgrounds.length
                    }["Signup.useEffect.interval"]);
                }
            }["Signup.useEffect.interval"], 3000);
            return ({
                "Signup.useEffect": ()=>clearInterval(interval)
            })["Signup.useEffect"];
        }
    }["Signup.useEffect"], []);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prevData)=>({
                ...prevData,
                [name]: value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('/api/Auth', formData);
            const { token, user } = response.data;
            console.log("token provided is", token, "👏👏👏👏👏👏👏👏👏👏😒❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥");
            localStorage.setItem('authToken', token);
            toast.success('Account created successfully!');
            setTimeout(()=>{
                router.back();
            }, 2000);
        } catch (err) {
            console.error('Signup error:', err);
            const errorMessage = err.response ? err.response.data.error : err.message;
            if (errorMessage === 'Email already exists') {
                toast.error('This email is already registered. Please use a different one.');
            } else {
                toast.error(errorMessage);
            }
        } finally{
            setLoading(false);
        }
    };
    const openModal = ()=>{
        setIsModalOpen(true);
        // Initialize OTPless every time the modal opens
        try {
            initOTPless(callback); // Reinitialize OTPless here
        } catch (error) {
            console.error("Error initializing OTPless:", error);
            toast.error("Error initializing OTPless.");
        }
    };
    const closeModal = ()=>{
        setIsModalOpen(false);
    };
    const callback = async (otplessUser)=>{
        console.log("Callback triggered with user data:", otplessUser);
        if (otplessUser) {
            console.log("OTPless condition passed");
            try {
                const { identities } = otplessUser;
                if (!identities || identities.length === 0) {
                    console.error("Identities array is missing or empty:", identities);
                    return;
                }
                const email = identities[0]?.identityValue;
                const name = identities[0]?.name;
                const picture = identities[0]?.picture;
                const response = await axios.post("/api/Auth", {
                    email,
                    picture,
                    name
                });
                if (response.status === 200) {
                    const { token, user } = response.data;
                    localStorage.setItem("token", token);
                    if (response.data.error === "Email already exists") {
                        console.log("Account already exists, skipping success toast.");
                        return;
                    }
                    toast.success(`Account created successfully, ${name}`);
                    setIsModalOpen(false);
                    setTimeout(()=>{
                        router.back();
                    }, 3000);
                }
            } catch (error) {
                toast.error("Error during authentication: " + error.message);
                console.error("Error during authentication:", error);
            }
        } else {
            console.error("OTPless login failed or no user data returned");
        }
    };
    return /*#__PURE__*/ _jsxDEV("div", {
        className: "login-container",
        children: [
            /*#__PURE__*/ _jsxDEV("div", {
                className: "left-section",
                children: [
                    /*#__PURE__*/ _jsxDEV(Image, {
                        src: backgrounds[backgroundIndex],
                        alt: "Background",
                        layout: "fill",
                        objectFit: "cover",
                        objectPosition: "center",
                        quality: 100
                    }, void 0, false, {
                        fileName: "[project]/src/app/frontend/signup/page.jsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "overlay",
                        children: [
                            /*#__PURE__*/ _jsxDEV("h2", {
                                children: "Join Us Today!"
                            }, void 0, false, {
                                fileName: "[project]/src/app/frontend/signup/page.jsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ _jsxDEV("p", {
                                children: "Create an account to enjoy exclusive benefits and seamless access."
                            }, void 0, false, {
                                fileName: "[project]/src/app/frontend/signup/page.jsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/frontend/signup/page.jsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/frontend/signup/page.jsx",
                lineNumber: 156,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV("div", {
                className: "right-section",
                children: /*#__PURE__*/ _jsxDEV("div", {
                    className: "form-card",
                    children: [
                        /*#__PURE__*/ _jsxDEV("button", {
                            className: "back-button",
                            onClick: ()=>router.push('/'),
                            children: "Back to website →"
                        }, void 0, false, {
                            fileName: "[project]/src/app/frontend/signup/page.jsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("h1", {
                            className: "form-header",
                            children: "Create an account"
                        }, void 0, false, {
                            fileName: "[project]/src/app/frontend/signup/page.jsx",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("p", {
                            className: "form-subheader",
                            children: [
                                "Already have an account?",
                                /*#__PURE__*/ _jsxDEV("button", {
                                    onClick: ()=>router.push('/frontend/login'),
                                    className: "signup-link",
                                    style: {
                                        background: 'none',
                                        border: 'none',
                                        color: '#6f42c1',
                                        fontWeight: 600,
                                        cursor: 'pointer'
                                    },
                                    children: "Login"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/frontend/signup/page.jsx",
                                    lineNumber: 180,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/frontend/signup/page.jsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ _jsxDEV("form", {
                            className: "signup-form",
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "form-group form-row",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("input", {
                                            type: "text",
                                            id: "first-name",
                                            name: "firstName",
                                            placeholder: "First Name",
                                            value: formData.firstName,
                                            onChange: handleChange,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/frontend/signup/page.jsx",
                                            lineNumber: 197,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("input", {
                                            type: "text",
                                            id: "last-name",
                                            name: "lastName",
                                            placeholder: "Last Name",
                                            value: formData.lastName,
                                            onChange: handleChange,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/frontend/signup/page.jsx",
                                            lineNumber: 206,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/frontend/signup/page.jsx",
                                    lineNumber: 196,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "form-group",
                                    children: /*#__PURE__*/ _jsxDEV("input", {
                                        type: "email",
                                        id: "email",
                                        name: "email",
                                        placeholder: "Email",
                                        value: formData.email,
                                        onChange: handleChange,
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/frontend/signup/page.jsx",
                                        lineNumber: 218,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/frontend/signup/page.jsx",
                                    lineNumber: 217,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "form-group password-group",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("input", {
                                            type: showPassword ? 'text' : 'password',
                                            id: "password",
                                            name: "password",
                                            placeholder: "Enter your password",
                                            value: formData.password,
                                            onChange: handleChange,
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/frontend/signup/page.jsx",
                                            lineNumber: 230,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("span", {
                                            className: "eye-icon",
                                            onClick: ()=>setShowPassword(!showPassword),
                                            children: showPassword ? '👁️' : '🙈'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/frontend/signup/page.jsx",
                                            lineNumber: 239,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/frontend/signup/page.jsx",
                                    lineNumber: 229,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("button", {
                                    type: "submit",
                                    className: "signup-button",
                                    disabled: loading,
                                    children: loading ? 'Creating account...' : 'Create account'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/frontend/signup/page.jsx",
                                    lineNumber: 247,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "divider",
                                    children: "Or register with"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/frontend/signup/page.jsx",
                                    lineNumber: 251,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ _jsxDEV("div", {
                                    className: "social-buttons",
                                    children: [
                                        /*#__PURE__*/ _jsxDEV("button", {
                                            className: "google-button",
                                            onClick: openModal,
                                            children: "Google"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/frontend/signup/page.jsx",
                                            lineNumber: 254,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ _jsxDEV("button", {
                                            className: "apple-button",
                                            children: "Apple"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/frontend/signup/page.jsx",
                                            lineNumber: 257,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/frontend/signup/page.jsx",
                                    lineNumber: 253,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/frontend/signup/page.jsx",
                            lineNumber: 195,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/frontend/signup/page.jsx",
                    lineNumber: 173,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/frontend/signup/page.jsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(Modal, {
                isOpen: isModalOpen,
                onRequestClose: closeModal,
                contentLabel: "OTPless Login",
                className: "otpless-modal",
                overlayClassName: "otpless-overlay",
                children: [
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "otpless-container",
                        children: /*#__PURE__*/ _jsxDEV("div", {
                            id: "otpless-login-page"
                        }, void 0, false, {
                            fileName: "[project]/src/app/frontend/signup/page.jsx",
                            lineNumber: 272,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/frontend/signup/page.jsx",
                        lineNumber: 271,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ _jsxDEV("button", {
                        onClick: closeModal,
                        className: "close-modal-button",
                        children: "Close"
                    }, void 0, false, {
                        fileName: "[project]/src/app/frontend/signup/page.jsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/frontend/signup/page.jsx",
                lineNumber: 264,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ _jsxDEV(ToastContainer, {}, void 0, false, {
                fileName: "[project]/src/app/frontend/signup/page.jsx",
                lineNumber: 279,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/frontend/signup/page.jsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
};
_s(Signup, "GDBXGPyYNz8ETwhfuvAfl/sfTbs=", false, function() {
    return [
        useRouter
    ];
});
_c = Signup;
export default Signup;
var _c;
__turbopack_refresh__.register(_c, "Signup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/frontend/signup/page.jsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_app_frontend_signup_page_jsx_154bd8._.js.map