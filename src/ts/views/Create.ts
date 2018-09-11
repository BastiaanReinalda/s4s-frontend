import m from 'mithril';
import { Poll } from '../models/Poll';

export class Create {

    view() {
        return m("div", [
            m("input[type=text][placeholder=Question]", {
                oninput: m.withAttr("value", function(value) {Poll.question = value}),
                value: Poll.question}),
            m("input[type=text][placeholder=Answer one]", {
                oninput: m.withAttr("value", function(value) {Poll.answerOne = value}),
                value: Poll.answerOne}),
            m("input[type=text][placeholder=Answer two]", {
                oninput: m.withAttr("value", function(value) {Poll.answerTwo = value}),
                value: Poll.answerTwo}),
            m("input[type=text][placeholder=Answer three]", {
                oninput: m.withAttr("value", function(value) {Poll.answerThree = value}),
                value: Poll.answerThree}),
            m("input[type=submit]"),
        ])
    }
}