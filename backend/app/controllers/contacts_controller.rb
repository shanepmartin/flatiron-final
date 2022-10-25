class ContactsController < ApplicationController
    # before_action :set_user
    # before_action :set_contact, only: %i[ show destroy update ]

    def index
        contacts = Contact.all
        render json: contacts
    end

    def show
        contact = Contact.find_by!(id: params[:id])
        render json: contact
    end

    def create
        token = request.headers["token"]
        user_id = decode_token(token)
        user = User.find(user_id)
        if user
            contact = Contact.new(name: params[:name], phone_number: params[:phone_number], address: params[:address], user_id: user.id)
            if contact.save
                render json: contact, serializer: ContactSerializer, status: 201
            else
                render json: { errors: contact.errors.full_messages }, status: 422
            end
        else
            render json: { error: "401 incorrect token" }, status: 401
        end
    end

    def update 
        contact = Contact.find_by!(id: params[:id])
        if contact
            if params[:name]
                contact.update(name: params[:name])
            end
            if params[:phone_number]
                contact.update(phone_number: params[:phone_number])
            end
            if params[:address]
                contact.update(address: params[:address])
            end
            # if params[:user_id]
            # contact.update(user_id: params[:user_id])
            # end
        else
            render json: { errors: contact.errors.full_messages }
        end
    end

    def destroy
        contact = Contact.find_by!(id: params[:id])
        contact.destroy
        head :no_content
    end

    private 

    def contact_params
        params.permit(:name, :phone_number, :address)
    end

    def set_contact
        contact = Contact.find(id: params[:id])
    end
    
end
