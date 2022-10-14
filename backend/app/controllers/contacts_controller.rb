class ContactsController < ApplicationController

    def index
        contacts = Contact.all
        render json: contacts
    end

    def show
        contact = Contact.find_by!(id: params[:id])
        render json: contact
    end

    def create
        contact = Contact.create!(contact_params)
        render json: contact
    end

    def update
        contact = Contact.find_by!(id: params[:id])
        contact.update(contact_params)
        render json: contact
    end

    # change the update methods to this format!!!

    # def update
    #     company = Company.find_by(id: params[:id])
    #     if company
    #         if params[:name]
    #             company.update(name: params[:name])
    #         end
    #         if params[:website]
    #             company.update(website: params[:website])
    #         end
    #         if params[:linkedin_regularCompanyUrl]
    #             company.update(linkedin_regularCompanyUrl: params[:linkedin_regularCompanyUrl])
    #         end
    #         if params[:description]
    #             company.update(description: params[:description])
    #         end
    #     end
    # end

    def destroy
        contact = Contact.find_by!(id: params[:id])
        contact.destroy
        head :no_content
    end

    private 

    def contact_params
        params.permit(:first_name, :last_name, :phone_number, :address)
    end
    
end
