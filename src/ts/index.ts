/*
 * Copyright (C) 2018 Amsterdam University of Applied Sciences (AUAS)
 *
 * This software is distributed under the terms of the
 * GNU General Public Licence version 3 (GPL) version 3,
 * copied verbatim in the file "LICENSE"
 */

import m, { Vnode } from 'mithril';
import '../scss/main.scss';
import 'popper.js';
import 'bootstrap';
import '../scss/sidebar.scss'

import {MainWindow} from "./views/MainWindow";

m.mount(document.body, MainWindow);