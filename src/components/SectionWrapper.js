import PropTypes from 'prop-types';

const SectionWrapper = ({className, children}) => {
    const defaultClass = 'border-t py-7 border-zinc-100 dark:border-zinc-800';
    const combinedClass = `${defaultClass} ${className}`.trim();

    return (<section className={combinedClass}>
        {children}
    </section>);
}

SectionWrapper.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

SectionWrapper.defaultProps = {
    className: '',
};

export default SectionWrapper;