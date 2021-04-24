import React from 'react';
import { SectionPost } from '../SectionPostWithDelete/SectionPost';
import './sectionHeader.scss';

export const SectionHeader = () => {
    return (
        <div>
            <div class="section-header">
                <h2 class="sec-heading float-left">Posts</h2>
            </div>
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Published</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Saved</a>
                </li>
            </ul>
            
        </div>
    )
}
