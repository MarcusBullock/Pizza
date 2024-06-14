import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
    return (
        <div className="px-4 py-3">
            <LinkButton to="/menu">&larr; Back to menu</LinkButton>

            <p className="mt-7 rounded-md bg-stone-200 px-5 py-3 text-center font-semibold">
                Your cart is empty. That&apos;s a pity.
            </p>
        </div>
    );
}

export default EmptyCart;
