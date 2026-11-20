import type { Config } from 'tailwindcss';
const config: Config = { content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { land: { 50:'#f2f7f2',100:'#e2eee3',600:'#28734a',700:'#1e603d',800:'#174b32',900:'#103b29',950:'#0b2c20' }, gold:'#d6b66b' }, boxShadow:{soft:'0 12px 40px rgba(14,52,35,.08)'} } }, plugins: [] };
export default config;
