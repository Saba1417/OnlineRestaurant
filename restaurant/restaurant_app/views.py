from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Category, MenuItem, Order, OrderItem
from .serializers import CategorySerializer, MenuItemSerializer, OrderSerializer, OrderItemSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class MenuItemViewSet(viewsets.ModelViewSet):
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer

    def get_queryset(self):
        queryset = MenuItem.objects.all()
        category = self.request.query_params.get('category')
        vegetarian = self.request.query_params.get('vegetarian')
        nuts_free = self.request.query_params.get('nuts_free')
        spiciness = self.request.query_params.get('spiciness')

        if category:
            queryset = queryset.filter(category_id=category)
        if vegetarian is not None:
            queryset = queryset.filter(vegeterian=vegetarian.lower() == 'true')
        if nuts_free is not None:
            queryset = queryset.filter(nuts=not (nuts_free.lower() == 'true'))
        if spiciness:
            queryset = queryset.filter(spiciness=spiciness)

        return queryset

class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

    def create(self, request, *args, **kwargs):
        # Assuming the request data has productId, quantity, price
        product_id = request.data.get('productId')
        quantity = request.data.get('quantity', 1)
        price = request.data.get('price')

        # For simplicity, create a new order each time or find existing
        # In a real app, you'd have user sessions
        order = Order.objects.create(total_price=price * quantity)
        OrderItem.objects.create(order=order, product_id=product_id, quantity=quantity, price=price)

        serializer = self.get_serializer(order)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class OrderItemViewSet(viewsets.ModelViewSet):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer
