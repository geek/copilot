import React from 'react';
import EmptyServices from '@components/empty/services';
import PropTypes from '@root/prop-types';
import Row from '@ui/components/row';
import Column from '@ui/components/column';
import { H2 } from '@ui/components/base-elements';
import {
  FormGroup,
  Toggle,
  ToggleList,
  Legend
} from '@ui/components/form';
import TopologyFilter from '@components/services/topology-filter';
import styled from 'styled-components';
import { unitcalc, remcalc } from '@ui/shared/functions';

const StyledLegend = styled(Legend)`
  float: left;
  padding-top: ${unitcalc(2)};
  margin-right: ${unitcalc(1.5)};
`;

const PaddedRow = styled(Row)`
  margin-bottom: ${remcalc(18)}
`;

const ServicesView = ({
  children,
  onToggle,
  project,
  services,
  toggleValue
}) => {

  const onToggleChange = (evt) => {
    evt.preventDefault();

    const value = evt.target.value;
    if(value !== toggleValue) {
      onToggle(value);
    }
  };

  const filter = toggleValue === 'topology'
    ? (
      <Column xs={7}>
        <TopologyFilter services={services} project={project} />
      </Column>
    ) : null;

  const toggle = services ? (
    <PaddedRow>
      <Column xs={5}>
        <FormGroup name='service-view' value={toggleValue}>
          <StyledLegend>View</StyledLegend>
          <ToggleList>
            <Toggle value='topology' onChange={onToggleChange}>Topology</Toggle>
            <Toggle value='list' onChange={onToggleChange}>List</Toggle>
          </ToggleList>
        </FormGroup>
      </Column>
      { filter }
    </PaddedRow>
  ) : null;

  const content = services.length ? children : (
    <EmptyServices />
  );

  return (
    <Row>
      <Column xs={12}>
        <H2>Services</H2>
        { toggle }
        { content }
      </Column>
    </Row>
  );
};

ServicesView.propTypes = {
  children: React.PropTypes.node,
  onToggle: React.PropTypes.func.isRequired,
  project: React.PropTypes.arrayOf(PropTypes.project),
  services: React.PropTypes.arrayOf(PropTypes.service),
  toggleValue: React.PropTypes.string.isRequired
};

export default ServicesView;