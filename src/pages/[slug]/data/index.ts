import type { StaticImageData } from 'next/image';

import type { StageItem } from '@widgets/stages';

import { autoService } from './auto';
import { banksService } from './banks';
import { civilService } from './civil';
import { constructionService } from './construction';
import { consumerService } from './consumer';
import { estateService } from './estate';
import { familyService } from './family';
import { fraudService } from './fraud';
import { insuranceService } from './insurance';
import { landService } from './land';
import { taxesService } from './taxes';
import { workService } from './work';

export type ServiceData = {
    meta: string;
    title: string;
    description: string;
    illustration: StaticImageData;
    stageImg: StaticImageData;
    stages: StageItem[];
    stageMeta: string;
    stageTitle: string;
    stageDescription: string;
};

export const serviceData: Record<string, ServiceData> = {
    auto: autoService,
    banks: banksService,
    civil: civilService,
    construction: constructionService,
    consumer: consumerService,
    estate: estateService,
    family: familyService,
    fraud: fraudService,
    insurance: insuranceService,
    land: landService,
    taxes: taxesService,
    work: workService,
};
